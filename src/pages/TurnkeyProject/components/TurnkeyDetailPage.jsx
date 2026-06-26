import React, { useState, useEffect, useMemo } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { getProjectDetails } from '../data/turnkeyProjectsData'
import { PackageSearch, CookingPot, Factory, Stamp, Flame, Snowflake, Package } from 'lucide-react'
import './RedChilliDetailPage.css' // Reuse the master layout stylesheet
import WhyChooseSalvin from './WhyChooseSalvin'

/* Helper to dynamically resolve unique SVG icons for each process stage.
   Priority: most-specific keyword first to prevent duplicate assignments. */
function getStepIcon(title, id) {
  const t = (title || '').toLowerCase()

  // ── LUCIDE ICONS FOR BISCUIT PROJECT ──
  if (t === 'raw material handling') return <PackageSearch className="rcp-process-card__icon-svg" />
  if (t === 'dough mixing') return <CookingPot className="rcp-process-card__icon-svg" />
  if (t === 'dough forming') return <Factory className="rcp-process-card__icon-svg" />
  if (t === 'biscuit molding') return <Stamp className="rcp-process-card__icon-svg" />
  if (t === 'baking') return <Flame className="rcp-process-card__icon-svg" />
  if (t === 'cooling') return <Snowflake className="rcp-process-card__icon-svg" />
  if (t === 'packaging') return <Package className="rcp-process-card__icon-svg" />


  // ── RAW MATERIAL INTAKE ──
  if (t.includes('receiving') || t.includes('intake') || t.includes('ingestion') || t.includes('feeding')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
      </svg>
    )
  }

  // ── WASHING / CLEANING / BUBBLE WASH ──
  if (t.includes('bubble wash') || t.includes('spray wash') || t.includes('jet wash') || t.includes('latex spray') || t.includes('latex') || t.includes('pre-aspiration')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
        <path d="M9.5 15a2.5 2.5 0 0 1 5 0" />
      </svg>
    )
  }

  // ── GENERAL WASHING / CLEANING ──
  if (t.includes('washing') || t.includes('cleaning') || t.includes('sanitiz') || t.includes('rinsing') || t.includes('shower')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
      </svg>
    )
  }

  // ── DUST / ASPIRATION / SEPARATION (not filtration) ──
  if (t.includes('aspiration') || t.includes('dust') || t.includes('winnow') || t.includes('de-husk')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
      </svg>
    )
  }

  // ── SORTING / GRADING / INSPECTION ──
  if (t.includes('sorting') || t.includes('grading') || t.includes('inspection') || t.includes('optical') || t.includes('colour sort') || t.includes('color sort') || t.includes('vibrating screen') || t.includes('vibrat')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    )
  }

  // ── PEELING / BLANCHING / SKIN REMOVAL ──
  if (t.includes('peel') || t.includes('blanch') || t.includes('abrasive') || t.includes('skin') || t.includes('bulb') || t.includes('de-seed')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  }

  // ── DESTONING / GRAVITY SEPARATION ──
  if (t.includes('deston') || t.includes('gravity') || t.includes('stone') || t.includes('heavy') || t.includes('separator')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    )
  }

  // ── CUTTING / SLICING / DICING / CRUSHING (pre-mill) ──
  if (t.includes('cutting') || t.includes('slicing') || t.includes('dicing') || t.includes('chopping') || t.includes('coarse crush') || t.includes('pre-crush') || t.includes('impact')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 12h12M6 8h12M6 16h12" /><rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
    )
  }

  // ── CRUSHING / DISINTEGRATION (general) ──
  if (t.includes('crush') || t.includes('disintegrat') || t.includes('breaker') || t.includes('break')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )
  }

  // ── FINE GRINDING / MILLING / PULVERISING ──
  if (t.includes('grinding') || t.includes('grind') || t.includes('milling') || t.includes('mill') || t.includes('pulveris') || t.includes('cryogenic') || t.includes('pin mill') || t.includes('colloid') || t.includes('micron')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9" />
      </svg>
    )
  }

  // ── ROASTING / HOT-AIR ROASTING / FRYING ──
  if (t.includes('roasting') || t.includes('roast') || t.includes('frying') || t.includes('fryer')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    )
  }

  // ── DRYING / DEHYDRATING ──
  if (t.includes('drying') || t.includes('dryer') || t.includes('dehydrat') || t.includes('moisture')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    )
  }

  // ── BOILING / STEAM CURING / COOKING ──
  if (t.includes('boiling') || t.includes('curing') || t.includes('steam') || t.includes('cooking') || t.includes('kettle') || t.includes('thermal')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12h.01M15 12h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    )
  }

  // ── PULPING / EXTRACTION / PRESSING ──
  if (t.includes('pulping') || t.includes('extraction') || t.includes('extract') || t.includes('pressing') || t.includes('press') || t.includes('juice extract')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 7.19 7 5c-.71 2.65-.57 4.86.42 6.28C8.43 12.7 11 13.23 11 16.3c0 2.21-1.79 4-4 4S3 18.51 3 16.3h4" />
        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
      </svg>
    )
  }

  // ── MICRO FILTRATION / FINE FILTRATION ──
  if (t.includes('micro filter') || t.includes('micro filtration') || t.includes('fine filter') || t.includes('fine filtration') || t.includes('duplex filter') || t.includes('cartridge') || t.includes('clarif')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18M7 12h10M11 18h2" />
      </svg>
    )
  }

  // ── COARSE FILTRATION / STRAINING ──
  if (t.includes('coarse filter') || t.includes('coarse filtration') || t.includes('strainer') || t.includes('pre-filter') || t.includes('primary filter')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
      </svg>
    )
  }

  // ── GENERAL FILTRATION / SIEVING / SIFTING ──
  if (t.includes('filtration') || t.includes('filter') || t.includes('sieving') || t.includes('sieve') || t.includes('sifting') || t.includes('rotary siev') || t.includes('screen') || t.includes('centrifug')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="4" rx="1" />
        <path d="M6 7v14M10 7v10M14 7v12M18 7v8" />
      </svg>
    )
  }

  // ── VACUUM / DEAERATION / EVAPORATION / CONCENTRATION ──
  if (t.includes('vacuum') || t.includes('deaerat') || t.includes('evaporat') || t.includes('concentrat')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
        <path d="M12 6v6l4 2" /><path d="M2 12h2M20 12h2M12 2v2M12 20v2" />
      </svg>
    )
  }

  // ── PRE-HEATING / HEATING / WARMING / BAKING ──
  if (t.includes('pre-heat') || t.includes('preheat') || t.includes('pre heat') || t.includes('heating') || t.includes('warming') || t.includes('warm') || t.includes('melting') || t.includes('melt') || t.includes('liquif') || t.includes('bak') || t.includes('baking')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    )
  }

  // ── HOMOGENIZATION / AGITATION ──
  if (t.includes('homogen') || t.includes('agitat')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22V12" /><path d="M5 17H2a10 10 0 0 1 20 0h-3" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  }

  // ── BLENDING / MIXING / DOSING (ingredient) / SEASONING ──
  if (t.includes('blend') || t.includes('mixing') || t.includes('ingredient') || t.includes('dissolut') || t.includes('stirr') || t.includes('seasoning')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 22H5a2 2 0 0 1-2-2V4h18v16a2 2 0 0 1-2 2z" />
        <path d="M12 4v10" /><path d="M9 11l3 3 3-3" />
      </svg>
    )
  }

  // ── POLISHING / BRUSHING / GLAZING ──
  if (t.includes('polish') || t.includes('brush') || t.includes('glaz') || t.includes('paraffin') || t.includes('shining')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    )
  }

  // ── COOLING / CHILLING / SETTLING / TEMPERING ──
  if (t.includes('cooling') || t.includes('chilling') || t.includes('cool') || t.includes('chill') || t.includes('settl') || t.includes('temper')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="2" x2="12" y2="22" /><path d="m17 5-5 5-5-5" /><path d="m17 19-5-5-5 5" />
        <path d="m2 12 5-3 5 3 5-3 5 3" />
      </svg>
    )
  }

  // ── PITTING / DE-SEEDING ──
  if (t.includes('pitting') || t.includes('pit') || t.includes('seeding') || t.includes('de-seed') || t.includes('deseeding') || t.includes('stone remov') || t.includes('stuffed')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z" />
        <path d="M12 12v4" /><circle cx="12" cy="9" r="1" />
      </svg>
    )
  }

  // ── PASTEURIZATION / STERILIZATION / RETORT / AUTOCLAVE ──
  if (t.includes('pasteur') || t.includes('retort') || t.includes('autoclave') || t.includes('steril')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8M9 12h6" />
      </svg>
    )
  }

  // ── CAN FILLING / SYRUP DOSING / VOLUMETRIC FILLING ──
  if (t.includes('can fill') || t.includes('volumetric') || t.includes('syrup') || t.includes('brine') || t.includes('dosing')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 2h8l1 5H7z" /><rect x="5" y="7" width="14" height="15" rx="2" />
        <path d="M12 11v5M9.5 13.5h5" />
      </svg>
    )
  }

  // ── SEAMING / DOUBLE SEAM / AIR EXHAUSTING ──
  if (t.includes('seam') || t.includes('double seam') || t.includes('exhausting') || t.includes('exhaust') || t.includes('sealing') || t.includes('seal') || t.includes('induction')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        <path d="M8 12l3 3 5-5" />
      </svg>
    )
  }

  // ── FILLING / BOTTLING / JAR FILLING ──
  if (t.includes('filling') || t.includes('fill') || t.includes('bottling') || t.includes('bottle') || t.includes('jar') || t.includes('hot fill')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 2h8l1 5H7z" /><rect x="6" y="7" width="12" height="14" rx="2" />
        <path d="M12 11v6" />
      </svg>
    )
  }

  // ── CAPPING / LIDDING ──
  if (t.includes('capping') || t.includes('cap') || t.includes('lid') || t.includes('lidding') || t.includes('closure') || t.includes('closing')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="2" width="16" height="4" rx="1" />
        <rect x="6" y="6" width="12" height="16" rx="2" />
        <path d="M10 10h4M10 14h4" />
      </svg>
    )
  }

  // ── LABELING / TAGGING ──
  if (t.includes('label') || t.includes('tag') || t.includes('sticker') || t.includes('print') || t.includes('marking')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    )
  }

  // ── PACKAGING / BOXING / CARTON ──
  if (t.includes('packing') || t.includes('packaging') || t.includes('boxing') || t.includes('carton') || t.includes('cartoning') || t.includes('dispatch') || t.includes('shipment') || t.includes('warehousing') || t.includes('warehous') || t.includes('storage')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z" /><path d="M3 7v10l9 5 9-5V7" />
      </svg>
    )
  }

  // ── BAGGING / FFS / FLOW WRAPPING / WRAPPING ──
  if (t.includes('bagging') || t.includes('bag') || t.includes('ffs') || t.includes('flow wrap') || t.includes('wrapping') || t.includes('pouch') || t.includes('sachet')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    )
  }

  // ── METAL DETECTION / QUALITY CHECK ──
  if (t.includes('metal detect') || t.includes('quality') || t.includes('inspection') || t.includes('testing') || t.includes('assurance') || t.includes('check')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    )
  }

  // ── MAGNETIC SEPARATION ──
  if (t.includes('magnetic') || t.includes('magnet')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 15V9a6 6 0 0 1 12 0v6" /><path d="M4 15h4v4a2 2 0 0 1-4 0v-4z" />
        <path d="M16 15h4v4a2 2 0 0 1-4 0v-4z" />
      </svg>
    )
  }

  // ── CONDITIONING / MOISTURE CONTROL ──
  if (t.includes('condition') || t.includes('humidity')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
        <line x1="8" y1="16" x2="8.01" y2="16" /><line x1="8" y1="20" x2="8.01" y2="20" />
        <line x1="12" y1="18" x2="12.01" y2="18" /><line x1="12" y1="22" x2="12.01" y2="22" />
        <line x1="16" y1="16" x2="16.01" y2="16" /><line x1="16" y1="20" x2="16.01" y2="20" />
      </svg>
    )
  }

  // ── CONVEYOR / TRANSPORT / TRANSFER / RAW MATERIAL ──
  if (t.includes('convey') || t.includes('transfer') || t.includes('transport') || t.includes('elevator') || t.includes('feeding') || t.includes('raw material')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
        <path d="M7 7V5M17 7V5" />
      </svg>
    )
  }

  // ── FORMING / MOLDING / EXTRUSION ──
  if (t.includes('form') || t.includes('mold') || t.includes('extrusion') || t.includes('extrud')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 5v14M19 5v14M5 12h14" />
        <rect x="9" y="8" width="6" height="8" rx="2" />
      </svg>
    )
  }

  // ── WEIGHING / BATCHING / MULTI-HEAD WEIGHER ──
  if (t.includes('weigh') || t.includes('batch') || t.includes('multi-head') || t.includes('combination scale') || t.includes('scale')) {
    return (
      <svg className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a5 5 0 1 0 0 10h12a5 5 0 1 0 0-10h-2" />
        <path d="M12 3 9 6l3 3" />
      </svg>
    )
  }

  // ── Fallback — unique icons per numeric id ──
  const FALLBACKS = [
    <svg key="f0" className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
    <svg key="f1" className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    <svg key="f2" className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    <svg key="f3" className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
    <svg key="f4" className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    <svg key="f5" className="rcp-process-card__icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22V12M3 12h18M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 7v10l9 5 9-5V7"/></svg>,
  ]
  return FALLBACKS[id % FALLBACKS.length]
}


/* Helper to resolve dynamic FAQs when not explicitly defined in data layer */
function getFAQsForProject(details) {
  if (details.faqs && details.faqs.length > 0) {
    return details.faqs
  }
  const title = details.title
  const isLiquidOrPaste = title.toLowerCase().includes('juice') || title.toLowerCase().includes('honey') || title.toLowerCase().includes('paste') || title.toLowerCase().includes('sauce') || title.toLowerCase().includes('ketchup') || title.toLowerCase().includes('jelly') || title.toLowerCase().includes('oil')

  return [
    {
      question: `What is the processing capacity of the ${title}?`,
      answer: `Our plants are available in custom configurations from ${isLiquidOrPaste ? '500 Ltr/Hr to 5,000 Ltr/Hr' : '500 Kg/Hr to 5 Ton/Hr'} capacities to match your target production requirements.`
    },
    {
      question: `Can the plant process different varieties or grades of raw material?`,
      answer: `Yes. The system is engineered with adjustable settings and variable speed drives to handle diverse product grades while maintaining consistent color, flavor, and texture.`
    },
    {
      question: `Is the plant fully automatic?`,
      answer: `Yes. We offer semi-automatic and fully automatic turnkey solutions featuring centralized PLC automation and touch-screen HMI control systems.`
    },
    {
      question: `Does SALVIN provide installation and training support?`,
      answer: `Yes. SALVIN provides complete turnkey services including site planning, machinery manufacture, installation, dry runs, commissioning, and on-site operator training.`
    },
    {
      question: `Why choose SALVIN for the ${title}?`,
      answer: `SALVIN is a trusted name offering food-grade SS304/SS316L construction, energy-efficient thermal loops, modular expansion designs, and dedicated engineering support.`
    }
  ]
}

export default function TurnkeyDetailPage() {
  const { projectSlug } = useParams()
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeFaq, setActiveFaq] = useState(null)

  const details = useMemo(() => getProjectDetails(projectSlug), [projectSlug])

  // Reset gallery index on route change
  useEffect(() => {
    setGalleryIndex(0)
    setActiveFaq(null)
  }, [projectSlug])

  // Scroll to top only when navigating to a different project route
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectSlug])

  // SEO meta
  useEffect(() => {
    if (!details) return
    document.title = `${details.title} | Turnkey Solutions | Salvin Industries`
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        `Complete turnkey ${details.title} by Salvin Industries. Automated, food-grade, energy-efficient processing and packaging lines from small to large scale.`
      )
    }
  }, [details, projectSlug])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [projectSlug])

  // Auto-rotate gallery
  useEffect(() => {
    if (!details?.gallery?.length) return
    const galleryLength = details.gallery.length
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryLength)
    }, 4000)
    return () => clearInterval(interval)
  }, [projectSlug, details?.gallery?.length])

  if (!details) {
    return (
      <div className="rcp-page" style={{ padding: '120px 20px', textAlign: 'center' }}>
        <div className="rcp-container">
          <h2 className="rcp-section-title">Project Not Found</h2>
          <p className="rcp-section-subtitle" style={{ margin: '20px auto' }}>
            The requested turnkey project detail page could not be located.
          </p>
          <NavLink to="/turnkey-project" className="rcp-btn rcp-btn--primary">
            Back to Project Portfolio
          </NavLink>
        </div>
      </div>
    )
  }

  // Cap process steps at 7 to match Red Chilli master template (7-stage workflow)
  const hasSteps = details.processSteps && details.processSteps.length > 0
  const processSteps = hasSteps ? details.processSteps.slice(0, 7) : []
  const projectFaqs = getFAQsForProject(details)

  return (
    <div className="rcp-page">
      {/* ═══ HERO BANNER ═══ */}
      <section className="rcp-hero" style={{ minHeight: details.heroMinHeight || '72vh' }}>
        <div className="rcp-hero__overlay" />
        <div className="rcp-hero__bg" style={{ backgroundImage: `url('${details.heroImage || details.overview.image}')`, ...(details.heroStyle || {}) }} />
        <div className="rcp-hero__content">
          <span className="rcp-hero__badge">
            <span className="rcp-hero__badge-dot" />
            {details.badge}
          </span>
          <h1 className="rcp-hero__title">
            {details.title}
          </h1>
          <p className="rcp-hero__subtitle">
            {details.subtitle}
          </p>
          <div className="rcp-hero__actions">
            {details.pdfFile ? (
              <a
                href={`/turnkey-brochures/pdfs/${details.pdfFile}`}
                download={details.pdfFile}
                className="rcp-btn rcp-btn--primary"
              >
                <svg className="rcp-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{ width: '20px', height: '20px', marginRight: '8px' }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                DOWNLOAD BROCHURE
              </a>
            ) : (
              <NavLink to="/contact" className="rcp-btn rcp-btn--primary">
                Request Information
              </NavLink>
            )}
            <a href="#enquiry" className="rcp-btn rcp-btn--outline">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PLANT OVERVIEW ═══ */}
      <section className="rcp-section rcp-overview" id="overview" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['overview'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">Plant Overview</div>
          <h2 className="rcp-section-title">Complete <span className="rcp-accent">Processing Solution</span></h2>
          <div className="rcp-overview__grid">
            <div className="rcp-overview__text">
              <p>{details.overview.p1}</p>
              <p>{details.overview.p2}</p>
              <div className="rcp-overview__features">
                {(details.overview.features4 || [
                  { title: 'High Yield', desc: 'Maximum product recovery per batch' },
                  { title: 'Hygienic Process', desc: 'Food grade SS304/SS316L construction' },
                  { title: 'Consistent Quality', desc: 'Uniform product output every cycle' },
                  { title: 'Energy Efficient', desc: 'Optimised power consumption per ton' }
                ]).map((f, i) => (
                  <div key={i} className="rcp-overview__feature">
                    <div className="rcp-overview__feature-icon">
                      {i === 0 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                          <polyline points="16 7 22 7 22 13" />
                        </svg>
                      )}
                      {i === 1 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      )}
                      {i === 2 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                        </svg>
                      )}
                      {i === 3 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      )}
                    </div>
                    <div className="rcp-overview__feature-body">
                      <p className="rcp-overview__feature-title">{f.title}</p>
                      <p className="rcp-overview__feature-desc">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rcp-overview__image ${details.overview?.isBrochure ? 'rcp-overview__image--brochure' : 'rcp-overview__image--photo'}`}>
              <img src={details.overview.photoImage || details.overview.image} alt={`${details.title} by Salvin Industries`} loading="lazy" style={details.overview?.isBrochure ? { objectFit: 'contain', background: '#fff' } : undefined} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS WORKFLOW ═══ */}
      {hasSteps && (
        <section className="rcp-section rcp-process-new" id="process-flow" data-animate>
          <div className={`rcp-container rcp-animate ${isVisible['process-flow'] ? 'rcp-animate--in' : ''}`}>
            <div className="rcp-section-badge">Process Flow</div>
            <h2 className="rcp-section-title">{details.workflowTitle || details.title.replace(/\sProcessing\s(?:Line|Plant)$/i, '')} <span className="rcp-accent">{details.workflowAccentTitle || 'Processing Workflow'}</span></h2>
            <p className="rcp-section-subtitle">A streamlined and fully integrated processing workflow designed to transform raw materials into premium-quality finished products while ensuring maximum efficiency, product consistency and superior output quality.</p>

            <div className="rcp-process-flow-container">
              {processSteps.map((step, i) => (
                <React.Fragment key={step.id}>
                  <div className="rcp-process-card">
                    <div className="rcp-process-card__icon">
                      {getStepIcon(step.title, step.id)}
                    </div>
                    <div className="rcp-process-card__label">{step.title}</div>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="rcp-process-arrow">
                      <svg className="rcp-process-flow-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ MACHINERY USED ═══ */}
      {details.machinery && details.machinery.length > 0 && (
        <section className="rcp-section rcp-machinery" id="machinery" data-animate>
          <div className={`rcp-container rcp-animate ${isVisible['machinery'] ? 'rcp-animate--in' : ''}`}>
            <div className="rcp-section-badge">Machinery Used</div>
            <h2 className="rcp-section-title">Core <span className="rcp-accent">Equipment</span></h2>
            <div className="rcp-machinery__grid">
              {details.machinery.map((m, i) => (
                <div key={i} className="rcp-machine-card">
                  <div className="rcp-machine-card__image-wrapper">
                    <img src={m.image} alt={m.name} className="rcp-machine-card__image" loading="lazy" />
                    <div className="rcp-machine-card__badge">{String(i + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="rcp-machine-card__content">
                    <h3 className="rcp-machine-card__title">{m.name}</h3>
                    <p className="rcp-machine-card__desc">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ FAQ SECTION ═══ */}
      <section className="rcp-section rcp-faq-section" id="faq" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['faq'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-section-badge">FAQs</div>
          <h2 className="rcp-section-title">Frequently Asked <span className="rcp-accent">Questions</span></h2>
          <p className="rcp-section-subtitle">Everything you need to know about our {details.title}.</p>

          <div className="rcp-faq__list">
            {projectFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`rcp-faq__item ${isOpen ? 'rcp-faq__item--open' : ''}`}>
                  <button
                    className="rcp-faq__question-btn"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    <span className="rcp-faq__question-text">{faq.question}</span>
                    <span className="rcp-faq__icon-toggle">
                      {isOpen ? (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="rcp-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className="rcp-faq__answer-wrapper">
                    <div className="rcp-faq__answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIAL GALLERY ═══ */}
      {details.gallery && details.gallery.length > 0 && (
        <section className="rcp-section rcp-gallery" id="gallery" data-animate>
          <div className={`rcp-container rcp-animate ${isVisible['gallery'] ? 'rcp-animate--in' : ''}`}>
            <div className="rcp-section-badge">Industrial Gallery</div>
            <h2 className="rcp-section-title">Plant <span className="rcp-accent">Gallery</span></h2>
            <div className="rcp-gallery__showcase">
              <div className="rcp-gallery__main">
                <img
                  src={details.gallery[galleryIndex].src}
                  alt={details.gallery[galleryIndex].caption}
                  className="rcp-gallery__main-img"
                />
                <div className="rcp-gallery__caption">{details.gallery[galleryIndex].caption}</div>
              </div>
              <div className="rcp-gallery__thumbs">
                {details.gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`rcp-gallery__thumb ${galleryIndex === i ? 'rcp-gallery__thumb--active' : ''}`}
                    onClick={() => setGalleryIndex(i)}
                    type="button"
                  >
                    <img src={img.src} alt={img.caption} loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      
      {/* ═══ WHY CHOOSE SALVIN ═══ */}
      <WhyChooseSalvin prefix="rcp" isVisible={isVisible['why-salvin']} projectKey={projectSlug} />

{/* ═══ ENQUIRY / CONTACT CTA ═══ */}
      <section className="rcp-section rcp-cta" id="enquiry" data-animate>
        <div className={`rcp-container rcp-animate ${isVisible['enquiry'] ? 'rcp-animate--in' : ''}`}>
          <div className="rcp-cta__box">
            <h2>Ready to Build Your {details.title}?</h2>
            <p>
              Get a customised project proposal with capacity recommendations, plant layout, equipment list,
              timeline, and investment estimate — all tailored to your specific requirements.
            </p>
            <div className="rcp-cta__actions">
              <a
                href={`https://wa.me/919898727796?text=I%20am%20interested%20in%20the%20${encodeURIComponent(details.title)}.%20Please%20share%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rcp-btn rcp-btn--primary rcp-btn--lg"
              >
                <svg className="rcp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <NavLink to="/contact" className="rcp-btn rcp-btn--outline rcp-btn--lg">
                <svg className="rcp-cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </NavLink>
            </div>
            <p className="rcp-cta__phone">
              Or call directly: <a href="tel:+919898727796"><strong>+91 98987 27796</strong></a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACK NAVIGATION ═══ */}
      <div className="rcp-back-nav">
        <NavLink to="/turnkey-project" className="rcp-btn rcp-btn--outline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px', marginRight: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Project Portfolio
        </NavLink>
      </div>
    </div>
  )
}
