import React, { useMemo, useState } from "react";
import { Navigate, NavLink, Route, Routes, useLocation, useParams, useSearchParams } from "react-router-dom";
import { FaBoxOpen, FaImage, FaLayerGroup, FaPlus, FaRegEdit, FaRegSave, FaRobot, FaSearch, FaSitemap, FaTags, FaTrashAlt, FaDraftingCompass, FaPencilRuler, FaHandshake, FaCogs, FaTruck, FaChartLine, FaTools } from "react-icons/fa";
import "./App.css";
import Cropper from "react-easy-crop";
const machineryLayoutImage = "/assets/core/icons/machinery-layout.webp";
const blueMachinesImage = "/assets/core/icons/blue-machines.webp";
import About from "./components/AboutSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
// import IntroOverlay from "./components/IntroOverlay";
const searchIcon = "/assets/core/icons/search.webp";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "admin@123";
const ADMIN_TOKEN = import.meta.env.VITE_ADMIN_TOKEN || "salvin-admin-token";

async function readJsonResponse(response) {
  const contentType = response.headers.get("content-type") || "";
  const bodyText = await response.text();

  if (!contentType.includes("application/json")) {
    const preview = bodyText.trim().slice(0, 80);
    throw new Error(
      preview.startsWith("<!DOCTYPE") || preview.startsWith("<html")
        ? "Machine API returned the frontend HTML. Start the Express server with `npm run server` or use `npm run full-dev`."
        : `Machine API returned a non-JSON response: ${preview || response.statusText}`
    );
  }

  const data = bodyText ? JSON.parse(bodyText) : null;
  if (!response.ok) {
    if (response.status === 401 && typeof localStorage !== "undefined") {
      localStorage.removeItem("salvin_auth_token");
      localStorage.removeItem("is_admin_authenticated");
    }
    throw new Error(
      response.status === 401
        ? "Login expired. Please login again."
        : data?.error || "Machine API request failed."
    );
  }
  return data;
}

async function fetchJson(url, options = {}) {
  const token = typeof localStorage !== "undefined" ? localStorage.getItem("salvin_auth_token") : null;
  const headers = { ...(options.headers || {}) };
  if (token && !headers.Authorization) {
    headers.Authorization = `Bearer ${token}`;
  }
  if (
    options.body != null &&
    !(options.body instanceof FormData) &&
    !headers["Content-Type"]
  ) {
    headers["Content-Type"] = "application/json";
  }
  const response = await fetch(`${API_BASE_URL}${url}`, { ...options, headers });
  return readJsonResponse(response);
}

const machineImages = import.meta.glob("./assets/machine/*.{png,jpg,jpeg,webp,svg,gif}", { eager: true });

const resolveMachineImage = (image, sessionCache = {}) => {
  if (typeof image === "string") {
    // 1. Check if it's a direct public path (starts with /)
    if (image.startsWith("/")) return image;

    // 2. Check session cache (Base64)
    if (sessionCache[image]) return sessionCache[image];

    // 3. Check if it's a full URL
    if (image.startsWith("http") || image.startsWith("data:")) return image;

    // 4. Then check internal assets/machine folder (legacy)
    const path = `./assets/machine/${image}`;
    return machineImages[path]?.default || machineImages[path] || image;
  }
  return image;
};
import TurnkeyPage from "./pages/TurnkeyPage";
import TurnkeyProjectPage from "./pages/TurnkeyProject/TurnkeyProjectPage";
import CoreServiceDetailPage from "./pages/CoreServiceDetailPage";
import IndustrialConsultancyPage from "./pages/services/IndustrialConsultancyPage";
import PlantDesignEngineeringPage from "./pages/services/PlantDesignEngineeringPage";
import TurnkeyExecutionPage from "./pages/services/TurnkeyExecutionPage";
import MachineryEquipmentPage from "./pages/services/MachineryEquipmentPage";
import ProcessingPackagingPage from "./pages/services/ProcessingPackagingPage";
import SupplyChainProcurementPage from "./pages/services/SupplyChainProcurementPage";
import ProductionOptimizationPage from "./pages/services/ProductionOptimizationPage";
import ContractManufacturingPage from "./pages/services/ContractManufacturingPage";
import RedChilliDetailPage from "./pages/TurnkeyProject/components/RedChilliDetailPage";
import PizzaSauceProcessingDetailPage from "./pages/TurnkeyProject/components/PizzaSauceProcessingDetailPage";
import TomatoKetchupManufacturingDetailPage from "./pages/TurnkeyProject/components/TomatoKetchupManufacturingDetailPage";
import CoffeeProcessingDetailPage from "./pages/TurnkeyProject/components/CoffeeProcessingDetailPage";
import GreenTeaProcessingDetailPage from "./pages/TurnkeyProject/components/GreenTeaProcessingDetailPage";
import PotatoPowderDehydrationDetailPage from "./pages/TurnkeyProject/components/PotatoPowderDehydrationDetailPage";
import IndustrialFlourMillingDetailPage from "./pages/TurnkeyProject/components/IndustrialFlourMillingDetailPage";
import PeanutOilMillDetailPage from "./pages/TurnkeyProject/components/PeanutOilMillDetailPage";
import CorianderPowderDetailPage from "./pages/TurnkeyProject/components/CorianderPowderDetailPage";
import WheatFlourProcessingDetailPage from "./pages/TurnkeyProject/components/WheatFlourProcessingDetailPage";
import EdibleOilProcessingDetailPage from "./pages/TurnkeyProject/components/EdibleOilProcessingDetailPage";
import PastaNoodlesDetailPage from "./pages/TurnkeyProject/components/PastaNoodlesDetailPage";
import PeanutButterDetailPage from "./pages/TurnkeyProject/components/PeanutButterDetailPage";
import JackfruitDetailPage from "./pages/TurnkeyProject/components/JackfruitDetailPage";
import GingerGarlicPasteDetailPage from "./pages/TurnkeyProject/components/GingerGarlicPasteDetailPage";
import BlackPepperDetailPage from "./pages/TurnkeyProject/components/BlackPepperDetailPage";
import SeedCleaningSortingDetailPage from "./pages/TurnkeyProject/components/SeedCleaningSortingDetailPage";
import CocoaPowderProcessingDetailPage from "./pages/TurnkeyProject/components/CocoaPowderProcessingDetailPage";
import LiquidGlucoseDetailPage from "./pages/TurnkeyProject/components/LiquidGlucoseDetailPage";
import ProteinBarManufacturingDetailPage from "./pages/TurnkeyProject/components/ProteinBarManufacturingDetailPage";
import MayonnaiseProcessingDetailPage from "./pages/TurnkeyProject/components/MayonnaiseProcessingDetailPage";
import BlogsPage from "./pages/blogs/BlogsPage";
import BlogPostPage from "./pages/blogs/BlogPostPage";
import InstantMixFrozenFoodDetailPage from "./pages/TurnkeyProject/components/InstantMixFrozenFoodDetailPage";
import InstantNoodlesDetailPage from "./pages/TurnkeyProject/components/InstantNoodlesDetailPage";
import ChikkiPluckingDetailPage from "./pages/TurnkeyProject/components/ChikkiPluckingDetailPage";
import DryFruitChikkiDetailPage from "./pages/TurnkeyProject/components/DryFruitChikkiDetailPage";
import MamraPauvaDetailPage from "./pages/TurnkeyProject/components/MamraPauvaDetailPage";
import TomatoPureeDetailPage from "./pages/TurnkeyProject/components/TomatoPureeDetailPage";
import TomatoPasteDetailPage from "./pages/TurnkeyProject/components/TomatoPasteDetailPage";
import MangoPulpDetailPage from "./pages/TurnkeyProject/components/MangoPulpDetailPage";
import GuavaPulpDetailPage from "./pages/TurnkeyProject/components/GuavaPulpDetailPage";
import FullyAutomatedFruitJuiceProcessingPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomatedFruitJuiceProcessingPlantDetailPage";
import FullyAutomaticJellyManufacturingPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomaticJellyManufacturingPlantDetailPage";
import FullyAutomaticDehydratedGarlicPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomaticDehydratedGarlicPlantDetailPage";
import FullyAutomaticVegetableDryingPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomaticVegetableDryingPlantDetailPage";
import FullyAutomatedGaramMasalaProcessingPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomatedGaramMasalaProcessingPlantDetailPage";
import FullyAutomaticMixedSpicePlantDetailPage from './pages/TurnkeyProject/components/FullyAutomaticMixedSpicePlantDetailPage';

import FullyAutomaticSpicePackagingLineDetailPage from './pages/TurnkeyProject/components/FullyAutomaticSpicePackagingLineDetailPage';
import SpiceBlendingPlantDetailPage from './pages/TurnkeyProject/components/SpiceBlendingPlantDetailPage';
import FullyAutomatedCurryPowderProcessingPlantDetailPage from './pages/TurnkeyProject/components/FullyAutomatedCurryPowderProcessingPlantDetailPage';
import FullyAutomatedFrozenVegetableProcessingPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomatedFrozenVegetableProcessingPlantDetailPage";
import PetroleumJellyProcessingDetailPage from "./pages/TurnkeyProject/components/PetroleumJellyProcessingDetailPage";
import FullyAutomaticYogurtPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomaticYogurtPlantDetailPage";
import FullyAutomaticUHTMilkPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomaticUHTMilkPlantDetailPage";
import CurdPlantDetailPage from "./pages/TurnkeyProject/components/CurdPlantDetailPage";

import FullyAutomaticPasteurizedMilkPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomaticPasteurizedMilkPlantDetailPage";
import ButtermilkProcessingPlantDetailPage from "./pages/TurnkeyProject/components/ButtermilkProcessingPlantDetailPage";
import PaneerProcessingPlantDetailPage from "./pages/TurnkeyProject/components/PaneerProcessingPlantDetailPage";
import CheesePlantDetailPage from "./pages/TurnkeyProject/components/CheesePlantDetailPage";
import GheePlantDetailPage from "./pages/TurnkeyProject/components/GheePlantDetailPage";
import ButterProcessingPlantDetailPage from "./pages/TurnkeyProject/components/ButterProcessingPlantDetailPage";
import IceCreamProcessingPlantDetailPage from "./pages/TurnkeyProject/components/IceCreamProcessingPlantDetailPage";
import FlavoredMilkPlantDetailPage from "./pages/TurnkeyProject/components/FlavoredMilkPlantDetailPage";
import CreamProcessingPlantDetailPage from "./pages/TurnkeyProject/components/CreamProcessingPlantDetailPage";
import CarbonatedSoftDrinkPlantDetailPage from "./pages/TurnkeyProject/components/CarbonatedSoftDrinkPlantDetailPage";
import EnergyDrinkProcessingPlantDetailPage from "./pages/TurnkeyProject/components/EnergyDrinkProcessingPlantDetailPage";
import HealthDrinkPlantDetailPage from "./pages/TurnkeyProject/components/HealthDrinkPlantDetailPage";
import SyrupManufacturingPlantDetailPage from "./pages/TurnkeyProject/components/SyrupManufacturingPlantDetailPage";
import RTSBeveragePlantDetailPage from "./pages/TurnkeyProject/components/RTSBeveragePlantDetailPage";
import MineralWaterPlantDetailPage from "./pages/TurnkeyProject/components/MineralWaterPlantDetailPage";
import PackagedDrinkingWaterPlantDetailPage from "./pages/TurnkeyProject/components/PackagedDrinkingWaterPlantDetailPage";
import CoconutWaterProcessingPlantDetailPage from "./pages/TurnkeyProject/components/CoconutWaterProcessingPlantDetailPage";
import AloeVeraJuiceProcessingPlantDetailPage from "./pages/TurnkeyProject/components/AloeVeraJuiceProcessingPlantDetailPage";
import BiscuitPlantDetailPage from "./pages/TurnkeyProject/components/BiscuitPlantDetailPage";
import CookiePlantDetailPage from "./pages/TurnkeyProject/components/CookiePlantDetailPage";
import BreadPlantDetailPage from "./pages/TurnkeyProject/components/BreadPlantDetailPage";
import CakePlantDetailPage from "./pages/TurnkeyProject/components/CakePlantDetailPage";
import WaferPlantDetailPage from "./pages/TurnkeyProject/components/WaferPlantDetailPage";
import ChocolateProcessingPlantDetailPage from "./pages/TurnkeyProject/components/ChocolateProcessingPlantDetailPage";
import ToffeePlantDetailPage from "./pages/TurnkeyProject/components/ToffeePlantDetailPage";
import FullyAutomatedNamkeenPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomatedNamkeenPlantDetailPage";
import FullyAutomaticExtrudedSnacksPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomaticExtrudedSnacksPlantDetailPage";
import CornPuffPlantDetailPage from "./pages/TurnkeyProject/components/CornPuffPlantDetailPage";
import FullyAutomatedPopcornProcessingPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomatedPopcornProcessingPlantDetailPage";
import FullyAutomatedRiceProcessingPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomatedRiceProcessingPlantDetailPage";
import FullyAutomatedAttaPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomatedAttaPlantDetailPage";
import FullyAutomatedBesanProcessingPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomatedBesanProcessingPlantDetailPage";
import FullyAutomatedCornFlourPlantDetailPage from "./pages/TurnkeyProject/components/FullyAutomatedCornFlourPlantDetailPage";
import OatProcessingPlantDetailPage from "./pages/TurnkeyProject/components/OatProcessingPlantDetailPage";
import JaggeryProcessingPlantDetailPage from "./pages/TurnkeyProject/components/JaggeryProcessingPlantDetailPage";
import SugarSyrupPlantDetailPage from "./pages/TurnkeyProject/components/SugarSyrupPlantDetailPage";
import BabyFoodPlantDetailPage from "./pages/TurnkeyProject/components/BabyFoodPlantDetailPage";
import MaltedFoodPlantDetailPage from "./pages/TurnkeyProject/components/MaltedFoodPlantDetailPage";
import CocoaPowderPlantDetailPage from "./pages/TurnkeyProject/components/CocoaPowderPlantDetailPage";
import ProteinBarPlantDetailPage from "./pages/TurnkeyProject/components/ProteinBarPlantDetailPage";
import MilletProcessingPlantDetailPage from "./pages/TurnkeyProject/components/MilletProcessingPlantDetailPage";
import BottleFillingLineDetailPage from "./pages/TurnkeyProject/components/BottleFillingLineDetailPage";
import PanipuriProcessingLineDetailPage from "./pages/TurnkeyProject/components/PanipuriProcessingLineDetailPage";
import ChapatiProcessingLineDetailPage from "./pages/TurnkeyProject/components/ChapatiProcessingLineDetailPage";
import FaceWashManufacturingPlantDetailPage from "./pages/TurnkeyProject/components/FaceWashManufacturingPlantDetailPage";
import ShampooManufacturingPlantDetailPage from "./pages/TurnkeyProject/components/ShampooManufacturingPlantDetailPage";
import HairOilManufacturingPlantDetailPage from "./pages/TurnkeyProject/components/HairOilManufacturingPlantDetailPage";
import BodyLotionManufacturingPlantDetailPage from "./pages/TurnkeyProject/components/BodyLotionManufacturingPlantDetailPage";
import HandWashManufacturingPlantDetailPage from "./pages/TurnkeyProject/components/HandWashManufacturingPlantDetailPage";
import SurfaceCleanerManufacturingPlantDetailPage from "./pages/TurnkeyProject/components/SurfaceCleanerManufacturingPlantDetailPage";
import DetergentPowderManufacturingPlantDetailPage from "./pages/TurnkeyProject/components/DetergentPowderManufacturingPlantDetailPage";
import BodyWashManufacturingPlantDetailPage from "./pages/TurnkeyProject/components/BodyWashManufacturingPlantDetailPage";
import MouthwashManufacturingPlantDetailPage from "./pages/TurnkeyProject/components/MouthwashManufacturingPlantDetailPage";
import LiquidSoapManufacturingPlantDetailPage from "./pages/TurnkeyProject/components/LiquidSoapManufacturingPlantDetailPage";
import HandSanitizerManufacturingPlantDetailPage from "./pages/TurnkeyProject/components/HandSanitizerManufacturingPlantDetailPage";
import FaceCreamManufacturingDetailPage from "./pages/TurnkeyProject/components/FaceCreamManufacturingDetailPage";
import MoisturizingCreamManufacturingDetailPage from "./pages/TurnkeyProject/components/MoisturizingCreamManufacturingDetailPage";
import SunscreenLotionManufacturingDetailPage from "./pages/TurnkeyProject/components/SunscreenLotionManufacturingDetailPage";
import HairConditionerManufacturingDetailPage from "./pages/TurnkeyProject/components/HairConditionerManufacturingDetailPage";
import HairSerumManufacturingDetailPage from "./pages/TurnkeyProject/components/HairSerumManufacturingDetailPage";
import BabyLotionManufacturingDetailPage from "./pages/TurnkeyProject/components/BabyLotionManufacturingDetailPage";
import BabyShampooManufacturingDetailPage from "./pages/TurnkeyProject/components/BabyShampooManufacturingDetailPage";
import BodyButterManufacturingDetailPage from "./pages/TurnkeyProject/components/BodyButterManufacturingDetailPage";
import FacialSerumManufacturingDetailPage from "./pages/TurnkeyProject/components/FacialSerumManufacturingDetailPage";


import TurnkeyDetailPage from "./pages/TurnkeyProject/components/TurnkeyDetailPage";
import ServicesPage from "./pages/ServicesPage";
// import SalvinChatbot from "./chatbot/SalvinChatbot.jsx";
const Decade = "/assets/core/icons/decade_experties.webp";
const global = "/assets/core/icons/globalsupport.webp";
const innovation = "/assets/core/icons/innovation.webp";
const quality = "/assets/core/icons/quality.webp";
const _industryTurnkey = "/assets/categories/turnkey-projects.webp";
const projproteinbar = "/assets/categories/proteinbar.webp";
const _industryAutomation = "/assets/categories/automation-robotics.webp";
const _industryProcessing = "/assets/categories/processing-packaging.webp";
const _industryConsultancy = "/assets/core/icons/food_consultant.webp";
const _industryMaintenance = "/assets/categories/machine-maintenance.webp";
const projHoney = "/assets/company/projects/honey processing plant.webp";
const projSpices = "/assets/company/projects/spices_processing.webp";
const projApi = "/assets/company/projects/APi_Plant.webp";
const projChilli = "/assets/company/projects/1000_ton_red_chilli_plant.webp";
const projRice = "/assets/company/projects/puffed_rice.webp";
const spicesHeroImage = "/assets/core/heroes/spices_hero.webp";
const snacksHeroImage = "/assets/core/heroes/snacks_hero.webp";
const beveragesHeroImage = "/assets/core/heroes/beverages_hero.webp";
const _consultantHeroImage = "/assets/core/heroes/consultant_hero.webp";
const salvinLogo = "/assets/core/logo/salvin_logo.webp";


const _serviceCards = [
  {
    title: "Turnkey Projects",
    text: "Complete end-to-end plant architecture, from conceptual blueprinting to installation and final commissioning.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Machineries",
    text: "High-performance industrial machinery built for reliability and output.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Consultancy",
    text: "Process optimization, audits, and capacity planning by experts.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Automation & Robotics",
    text: "Smart automation and robotic integration for modern production lines.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Supply Chain",
    text: "Procurement and supply chain support with quality-first delivery.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Maintenance & Support",
    text: "Preventive maintenance and responsive support for uninterrupted operations.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Contract Packaging",
    text: "Flexible contract packaging with compliance, speed, and consistency.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80"
  }
];

const _testimonialCards = [
  {
    text: "\"Salvin's turnkey solution for our packaging line reduced downtime by 40% within the first quarter. Their engineering precision is truly unmatched in the industry.\"",
    name: "Rohan Mehta",
    role: "OPERATIONS DIRECTOR, APEX FOODS",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80"
  },
  {
    text: "\"The robotic integration provided by Salvin transformed our assembly process. Their support team was available 24/7 during the transition, making it seamless.\"",
    name: "Ananya Sharma",
    role: "PLANT HEAD, GLOBAL PHARMA",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
  },
  {
    text: "\"Salvin's execution quality and post-installation support helped us scale production with confidence.\"",
    name: "Vikram Desai",
    role: "DIRECTOR, NEXA PACKAGING",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80"
  }
];

const initialMachines = [];
const MACHINES_PER_PAGE = 18;


const emptySpecification = { title: "", value: "" };

function sameId(a, b) {
  return String(a ?? "") === String(b ?? "");
}

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

async function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Unable to read file."));
    reader.readAsDataURL(file);
  });
}

async function createImageFromUrl(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", () => reject(new Error("Unable to load image.")));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });
}

async function getCroppedImageBlob(imageSrc, cropPixels, outputType = "image/jpeg", quality = 0.92) {
  const image = await createImageFromUrl(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported.");

  const safeWidth = clampNumber(Math.round(cropPixels.width), 1, image.naturalWidth);
  const safeHeight = clampNumber(Math.round(cropPixels.height), 1, image.naturalHeight);
  const safeX = clampNumber(Math.round(cropPixels.x), 0, Math.max(0, image.naturalWidth - safeWidth));
  const safeY = clampNumber(Math.round(cropPixels.y), 0, Math.max(0, image.naturalHeight - safeHeight));

  canvas.width = safeWidth;
  canvas.height = safeHeight;
  ctx.drawImage(image, safeX, safeY, safeWidth, safeHeight, 0, 0, safeWidth, safeHeight);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Unable to crop image."))),
      outputType,
      quality
    );
  });
}

function createSlug(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatSpecs(specifications) {
  if (Array.isArray(specifications)) {
    return specifications
      .filter((item) => item && (item.title || item.value))
      .map((item) => [item.title || "-", item.value || "-"]);
  }
  if (specifications && typeof specifications === "object") {
    return Object.entries(specifications);
  }
  return [];
}

function toSpecEntries(source) {
  if (Array.isArray(source)) {
    return source
      .filter((item) => item && (item.title || item.value))
      .map((item) => [item.title || "-", item.value || "-"]);
  }
  if (source && typeof source === "object") {
    return Object.entries(source).filter(([, value]) => value != null && value !== "");
  }
  return [];
}

function normalizeMachineDetails(specifications) {
  if (specifications && typeof specifications === "object" && !Array.isArray(specifications)) {
    if ("meta" in specifications || "specifications" in specifications || "data" in specifications) {
      return {
        meta: specifications.meta && typeof specifications.meta === "object" ? specifications.meta : {},
        specifications:
          specifications.specifications && typeof specifications.specifications === "object"
            ? specifications.specifications
            : {},
        data: specifications.data && typeof specifications.data === "object" ? specifications.data : {}
      };
    }
    return { meta: {}, specifications, data: {} };
  }
  return { meta: {}, specifications: {}, data: {} };
}
function WebsitePreloader({ isLeaving }) {
  return (
    <div className={`website-preloader${isLeaving ? " is-leaving" : ""}`} role="status" aria-live="polite">
      <div className="preloader-glow" />
      <div className="preloader-logo-shell">
        <img src={salvinLogo} alt="Salvin Industries" className="preloader-logo" />
      </div>
      <div className="preloader-progress" aria-hidden="true">
        <span />
      </div>
      <span className="sr-only">Loading Salvin Industries website</span>
    </div>
  );
}

function ProtectedAdminRoute({ isAdminAuthenticated, children }) {
  const location = useLocation();
  if (!isAdminAuthenticated) {
    return <Navigate to="/admin-login" replace state={{ from: location }} />;
  }
  return children;
}

function AdminLoginPage({ onAdminLogin, isAdminAuthenticated }) {
  const location = useLocation();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const redirectPath = location.state?.from?.pathname || "/admin-panel";

  if (isAdminAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const isValid = await onAdminLogin(adminId, password);
      if (!isValid) {
        setErrorMessage("Invalid admin ID or password.");
        return;
      }
      setErrorMessage("");
    } catch {
      setErrorMessage("Unable to reach server. Start the API on port 5000 (npm run server).");
    }
  }

  return (
    <section className="admin-login page-section">
      <form className="card contact-form admin-login-form" onSubmit={handleSubmit}>
        <span className="section-badge">Restricted Access</span>
        <h1>Admin Login</h1>
        <p className="page-copy">Only authorized admin can access machine management. Use the credentials configured in the API environment.</p>
        <label>
          Admin ID
          <input
            value={adminId}
            onChange={(event) => setAdminId(event.target.value)}
            placeholder="Enter admin ID"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            required
          />
        </label>
        {errorMessage && <p className="admin-error-text">{errorMessage}</p>}
        <button className="card-btn" type="submit">Login</button>
      </form>
    </section>
  );
}

function MachineDetailPage({ machines, sessionCache }) {
  const { machineSlug } = useParams();
  const slugNorm = (s) =>
    String(s || "")
      .trim()
      .toLowerCase();
  const deriveSlugLocal = (m) =>
    m.slug?.trim()
      ? slugNorm(m.slug)
      : slugNorm(m.machine_name).replace(/\s+/g, "-");
  const machine =
    machines.find((m) => deriveSlugLocal(m) === slugNorm(machineSlug));
  const machineDetails = normalizeMachineDetails(machine?.specifications);
  const specificationRows = toSpecEntries(machineDetails.specifications);
  const detailRows = toSpecEntries(machineDetails.data);
  const metaRows = toSpecEntries(machineDetails.meta);

  React.useEffect(() => {
    if (machine) {
      document.title = `${machine.meta_title || machine.machine_name} | Salvin Industries`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', machine.meta_description || machine.description);
    }
  }, [machine]);

  if (!machine) return <div className="page-section text-center"><h2>Machine Not Found</h2><NavLink to="/machineries">Back to Catalog</NavLink></div>;

  return (
    <div className="machine-detail-page-v2">
      <div className="detail-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${resolveMachineImage(machine.image_url, sessionCache) || machineryLayoutImage})` }}>
        <div className="container">
          <span className="badge">{machine.category_id} / {machine.subcategory}</span>
          <h1>{machine.machine_name}</h1>
        </div>
      </div>

      <div className="detail-content container">
        <div className="detail-grid">
          <div className="detail-main">
            <div className="detail-image-card">
              <img src={resolveMachineImage(machine.image_url, sessionCache) || machineryLayoutImage} alt={machine.machine_name} />
            </div>
            <div className="detail-info-card">
              <h3>Description</h3>
              <p>{machine.description}</p>
            </div>
            {!!metaRows.length && (
              <div className="detail-info-card">
                <h3>Machine Overview</h3>
                <table className="specs-table">
                  <tbody>
                    {metaRows.map(([key, value]) => (
                      <tr key={key}>
                        <td className="lbl">{String(key)}</td>
                        <td className="val">{String(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {!!detailRows.length && (
              <div className="detail-info-card">
                <h3>Additional Details</h3>
                <table className="specs-table">
                  <tbody>
                    {detailRows.map(([key, value]) => (
                      <tr key={key}>
                        <td className="lbl">{String(key)}</td>
                        <td className="val">{String(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="detail-sidebar">
            <div className="specs-card">
              <h3>Technical Specifications</h3>
              <table className="specs-table">
                <tbody>
                  {specificationRows.map(([k, v]) => (
                    <tr key={k}>
                      <td className="lbl">{k.replace(/([A-Z])/g, ' $1').toUpperCase()}</td>
                      <td className="val">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="contact-card-sidebar">
              <h3>Interested?</h3>
              <p>Get a customized quote for this model.</p>
              <a href={`https://wa.me/919898727796?text=Inquiry for ${machine.machine_name}`} target="_blank" rel="noopener noreferrer" className="sidebar-btn">INQUIRE NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MachineDetailModal({ machine, sessionCache, onClose }) {
  React.useEffect(() => {
    if (!machine) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [machine, onClose]);

  if (!machine) return null;

  const imageSrc = resolveMachineImage(machine.image_url, sessionCache) || machineryLayoutImage;
  const details = normalizeMachineDetails(machine.specifications);
  const specifications = toSpecEntries(details.specifications);
  const additionalData = toSpecEntries(details.data);
  const metaDetails = toSpecEntries(details.meta);
  const displaySpecs = specifications.length
    ? specifications
    : [
      ["Category", machine.category_id || "-"],
      ["Subcategory", machine.subcategory || "-"]
    ];
  const formatLabel = (label) =>
    String(label)
      .replace(/_/g, " ")
      .replace(/([A-Z])/g, " $1")
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="machine-modal-title">
      <div className="modal-container machine-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">x</button>
        <div className="modal-body machine-modal-body">
          <div className="modal-image-wrap machine-modal-image-wrap">
            <img src={imageSrc} alt={machine.machine_name} />
          </div>
          <div className="modal-info machine-modal-info">
            <div className="modal-tags">
              <span className="modal-tag outline">SERIES-{machine.machine_id}</span>
              <span className="modal-tag filled">{machine.category_id || "Machine"}</span>
              {machine.subcategory && <span className="modal-tag filled">{machine.subcategory}</span>}
            </div>
            <h2 className="modal-title" id="machine-modal-title">{machine.machine_name}</h2>
            {/* <p className="modal-desc">{machine.description || "Machine details will be updated soon."}</p>// */}
            <p className="modal-desc">
              {(() => {
                const desc = machine.description || "";
                try { JSON.parse(desc); return "Machine details will be updated soon."; }
                catch { return desc || "Machine details will be updated soon."; }
              })()}
            </p >
            {!!metaDetails.length && (
              <>
                <h4 className="modal-spec-heading">Machine Overview</h4>
                <div className="modal-table-scroll">
                  <table className="modal-spec-table">
                    <tbody>
                      {metaDetails.map(([key, value]) => (
                        <tr key={key}>
                          <td>{formatLabel(key)}</td>
                          <td>{value || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
            <h4 className="modal-spec-heading">Technical Specifications</h4>
            <div className="modal-table-scroll">
              <table className="modal-spec-table">
                <tbody>
                  {displaySpecs.map(([key, value]) => (
                    <tr key={key}>
                      <td>{formatLabel(key)}</td>
                      <td>{value || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {!!additionalData.length && (
              <>
                <h4 className="modal-spec-heading">Additional Details</h4>
                <div className="modal-table-scroll">
                  <table className="modal-spec-table">
                    <tbody>
                      {additionalData.map(([key, value]) => (
                        <tr key={key}>
                          <td>{formatLabel(key)}</td>
                          <td>{value || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
            <a
              href={`https://wa.me/919898727796?text=Inquiry for ${encodeURIComponent(machine.machine_name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-cta-btn"
            >
              Configure This Model
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MachineriesPage({ machines, categories, subcategories, sessionCache, loadError }) {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const subcategoryParam = searchParams.get("subcategory") || "";

  React.useEffect(() => {
    const nextSubcategory = subcategoryParam.trim();
    if (!nextSubcategory) return;
    setSelectedSubcategories((current) =>
      current.includes(nextSubcategory) ? current : [nextSubcategory]
    );
  }, [subcategoryParam]);

  const toggleFilter = (value, list, setter) => {
    if (list.includes(value)) {
      setter(list.filter((v) => v !== value));
    } else {
      setter([...list, value]);
    }
  };

  const filteredMachines = useMemo(() => {
    let results = machines.filter((machine) => machine.status !== "inactive");

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (m) =>
          m.machine_name.toLowerCase().includes(q) ||
          (m.description || "").toLowerCase().includes(q)
      );
    }

    if (selectedSubcategories.length > 0) {
      results = results.filter((m) => selectedSubcategories.includes(m.subcategory));
    }

    if (sortBy === "name-asc") {
      results.sort((a, b) => a.machine_name.localeCompare(b.machine_name));
    } else if (sortBy === "name-desc") {
      results.sort((a, b) => b.machine_name.localeCompare(a.machine_name));
    }

    return results;
  }, [machines, searchQuery, selectedSubcategories, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredMachines.length / MACHINES_PER_PAGE));
  const visibleMachines = filteredMachines.slice(
    (currentPage - 1) * MACHINES_PER_PAGE,
    currentPage * MACHINES_PER_PAGE
  );

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedSubcategories, sortBy]);

  React.useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  const categoryGroups = categories.map((category) => ({
    ...category,
    subcategories: subcategories.filter((item) => sameId(item.category_id, category.id))
  }));

  return (
    <section className="machineries-page-v2 min-w-0 overflow-x-hidden">
      {/* ——— HERO ——— */}
      <div
        className="mach-hero"
        style={{ backgroundImage: `linear-gradient(rgba(9, 25, 56, 0.82), rgba(9, 25, 56, 0.82)), url(${blueMachinesImage})` }}
      >
        <span className="mach-hero-badge">★ EXPLORING THE FUTURE</span>
        <h1>Advanced Machinery<br />Solutions</h1>
        <p>
          Salvin Industries delivers engineered precision through high-performance
          automation and heavy-duty manufacturing systems. We empower global
          industrial leaders with reliability and technical expertise.
        </p>
        <div className="mach-hero-btns">
          <button className="mach-hero-btn primary">EXPLORE CATALOG</button>
          <button className="mach-hero-btn outline">OUR SHOWROOM</button>
        </div>
      </div>

      {/* ——— SECTION HEADER ——— */}
      <div className="mach-section-header">
        <div className="mach-section-left">
          <span className="mach-section-badge">← PRODUCTS</span>
          <h2>Processing &amp; Packaging Machinery</h2>
        </div>
        <p className="mach-section-desc">
          From turnkey plant setups to individual machine procurement, Salvin offers robust, low-maintenance equipment engineered for 24/7 production-line demands.
        </p>
      </div>

      {/* ——— MAIN CONTENT ——— */}
      <div className="mach-content">
        {/* SIDEBAR */}
        <aside className="mach-sidebar">
          <h3 className="mach-sidebar-title">Categories</h3>

          {categoryGroups.map((category) => (
            <React.Fragment key={category.id}>
              <h4 className="mach-sidebar-group">{category.name}</h4>
              {category.subcategories.map((subcategory) => (
                <label key={subcategory.id} className="mach-checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedSubcategories.includes(subcategory.name)}
                    onChange={() => toggleFilter(subcategory.name, selectedSubcategories, setSelectedSubcategories)}
                  />
                  {subcategory.name}
                </label>
              ))}
            </React.Fragment>
          ))}
        </aside>

        {/* RESULTS */}
        <div className="mach-results">
          <div className="mach-toolbar">
            <div className="mach-search-wrap">
              <span className="mach-search-icon"><img src={searchIcon} alt="🔍" style={{ width: '20px', height: '20px' }} /></span>
              <input
                className="mach-search"
                type="text"
                placeholder="Search machinery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="mach-sort-wrap">
              <label>Sort By</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="default">Default</option>
                <option value="name-asc">Name A–Z</option>
                <option value="name-desc">Name Z–A</option>
              </select>
            </div>
          </div>

          <div className="mach-results-header">
            <h3>
              Filtered Machinery <span className="mach-count">{filteredMachines.length} Results</span>
            </h3>
            <span className="mach-page-count">
              Page {currentPage} of {totalPages}
            </span>
          </div>
          {loadError && <p className="admin-error-text">{loadError}</p>}

          <div className="mach-grid">
            {visibleMachines.map((machine) => {
              const slugNorm = (s) => String(s || "").trim().toLowerCase();
              const slug = machine.slug?.trim() ? slugNorm(machine.slug) : slugNorm(machine.machine_name).replace(/\s+/g, "-");
              return (
                <article key={machine.machine_id} className="mach-card">
                  <NavLink to={`/machineries/${slug}`} className="mach-card-img">
                    <img src={resolveMachineImage(machine.image_url, sessionCache) || machineryLayoutImage} alt={machine.machine_name} />
                  </NavLink>
                  <div className="mach-card-body">
                    <div className="mach-card-tags">
                      {(machine.tags?.length ? machine.tags : [machine.category_id, machine.subcategory]).map((tag, i) => (
                        <span key={i} className={"mach-tag" + (i === 0 ? " orange" : " blue")}>{tag}</span>
                      ))}
                    </div>
                    <NavLink to={`/machineries/${slug}`}>
                      <h4 className="mach-card-title">{machine.machine_name}</h4>
                    </NavLink>
                    <p className="mach-card-desc">{machine.description}</p>
                    {(String(machine.speed ?? "").trim() || String(machine.capacity ?? "").trim()) ? (
                      <div className="mach-card-specs">
                        <div className="mach-spec-item">
                          {String(machine.speed ?? "").trim() ? (
                            <span className="mach-spec-lbl">{machine.speed}</span>
                          ) : null}
                          {String(machine.capacity ?? "").trim() ? (
                            <span className="mach-spec-unit">{machine.capacity}</span>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                    <div className="mach-card-actions">
                      <a href="https://wa.me/919898727796" target="_blank" rel="noopener noreferrer" className="mach-btn quote">GET A QUOTE</a>
                      <NavLink to={`/machineries/${slug}`} className="mach-btn view">VIEW MORE</NavLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          {totalPages > 1 && (
            <nav className="mach-pagination" aria-label="Machinery pages">
              <button
                type="button"
                className="mach-page-btn"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`mach-page-num${page === currentPage ? " active" : ""}`}
                  onClick={() => setCurrentPage(page)}
                  aria-current={page === currentPage ? "page" : undefined}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                className="mach-page-btn"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}

function AdminPage({
  dashboard,
  chatbotAnalytics,
  categories,
  subcategories,
  onAddCategory,
  onUpdateCategory,
  onDeleteCategory,
  onAddSubcategory,
  onUpdateSubcategory,
  onDeleteSubcategory,
  onAddMachine,
  onUpdateMachine,
  machines,
  onDeleteMachine
}) {
  const firstCategoryId = categories[0]?.id || "";
  const firstSubcategoryId = subcategories.find((item) => sameId(item.category_id, firstCategoryId))?.id || "";
  const [machineForm, setMachineForm] = useState({
    id: "",
    machine_name: "",
    category_id: firstCategoryId,
    subcategory_id: firstSubcategoryId,
    image_url: "",
    description: "",
    specifications: [{ ...emptySpecification }],
    slug: "",
    meta_title: "",
    meta_description: "",
    machine_json: ""
  });
  const [categoryForm, setCategoryForm] = useState({ id: "", name: "" });
  const [subcategoryForm, setSubcategoryForm] = useState({ id: "", category_id: firstCategoryId, name: "" });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isCroppingImage, setIsCroppingImage] = useState(false);
  const [cropImageSrc, setCropImageSrc] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [cropError, setCropError] = useState("");
  const [machineSubmitError, setMachineSubmitError] = useState("");
  const [categorySubmitError, setCategorySubmitError] = useState("");
  const [adminActionError, setAdminActionError] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const [machineSearch, setMachineSearch] = useState("");
  const [draftMessage, setDraftMessage] = useState("");

  React.useEffect(() => {
    if (!machineForm.category_id && firstCategoryId) {
      setMachineForm((prev) => ({
        ...prev,
        category_id: firstCategoryId,
        subcategory_id: firstSubcategoryId
      }));
    }
    if (!subcategoryForm.category_id && firstCategoryId) {
      setSubcategoryForm((prev) => ({ ...prev, category_id: firstCategoryId }));
    }
  }, [firstCategoryId, firstSubcategoryId, machineForm.category_id, subcategoryForm.category_id]);

  React.useEffect(() => {
    return () => {
      if (imagePreview.startsWith("blob:")) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const closeCropper = () => {
    setIsCroppingImage(false);
    setCropImageSrc("");
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
    setCropError("");
  };

  const filteredSubcategories = subcategories.filter((item) => sameId(item.category_id, machineForm.category_id));
  const subcategoryFormOptions = subcategories.filter((item) => sameId(item.category_id, subcategoryForm.category_id));
  const machineSlug = machineForm.slug || createSlug(machineForm.machine_name);
  const visibleMachines = useMemo(() => {
    const query = machineSearch.trim().toLowerCase();
    if (!query) return machines;
    return machines.filter((machine) => {
      const searchable = [
        machine.machine_name,
        machine.category_id,
        machine.subcategory,
        machine.description,
        machine.slug
      ].filter(Boolean).join(" ").toLowerCase();
      return searchable.includes(query);
    });
  }, [machineSearch, machines]);
  const questionAnalytics = useMemo(
    () => (chatbotAnalytics || []).filter((item) => item.event_type === "question_click"),
    [chatbotAnalytics]
  );
  const machineAnalytics = useMemo(
    () => (chatbotAnalytics || []).filter((item) => item.event_type === "machine_search"),
    [chatbotAnalytics]
  );
  const topQuestionCount = questionAnalytics[0]?.count || 0;

  const resetMachineForm = () => {
    setMachineForm({
      id: "",
      machine_name: "",
      category_id: firstCategoryId,
      subcategory_id: firstSubcategoryId,
      image_url: "",
      description: "",
      specifications: [{ ...emptySpecification }],
      slug: "",
      meta_title: "",
      meta_description: "",
      machine_json: ""
    });
    setImageFile(null);
    setImagePreview("");
    closeCropper();
    setDraftMessage("");
  };

  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      setMachineSubmitError("");
      setCropError("");
      const dataUrl = await readFileAsDataUrl(file);
      setCropImageSrc(String(dataUrl || ""));
      setIsCroppingImage(true);
    } catch (err) {
      setMachineSubmitError(err?.message || "Unable to read image.");
    }
  };

  const applyCrop = async () => {
    if (!cropImageSrc || !croppedAreaPixels) return;
    try {
      setCropError("");
      const blob = await getCroppedImageBlob(cropImageSrc, croppedAreaPixels);
      const file = new File([blob], `machine-${Date.now()}.jpg`, { type: blob.type || "image/jpeg" });
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      closeCropper();
    } catch (err) {
      setCropError(err?.message || "Unable to crop image.");
    }
  };

  const handleMachineNameChange = (value) => {
    setMachineForm((prev) => {
      const previousAutoSlug = createSlug(prev.machine_name);
      const shouldAutoUpdateSlug = !prev.slug || prev.slug === previousAutoSlug;
      return {
        ...prev,
        machine_name: value,
        slug: shouldAutoUpdateSlug ? createSlug(value) : prev.slug
      };
    });
  };

  const updateSpecification = (index, key, value) => {
    setMachineForm((prev) => ({
      ...prev,
      specifications: prev.specifications.map((spec, specIndex) =>
        specIndex === index ? { ...spec, [key]: value } : spec
      )
    }));
  };

  const addSpecificationRow = () => {
    setMachineForm((prev) => ({
      ...prev,
      specifications: [...prev.specifications, { ...emptySpecification }]
    }));
  };

  const removeSpecificationRow = (index) => {
    setMachineForm((prev) => ({
      ...prev,
      specifications: prev.specifications.filter((_, specIndex) => specIndex !== index)
    }));
  };

  const editMachine = (machine) => {
    const machineSpecs = Array.isArray(machine.specifications)
      ? machine.specifications
      : Object.entries(machine.specifications || {}).map(([title, value]) => ({ title, value: String(value ?? "") }));
    const details = normalizeMachineDetails(machine.specifications);
    const flatSpecs = toSpecEntries(details.specifications).map(([title, value]) => ({
      title: String(title),
      value: String(value ?? "")
    }));
    setMachineForm({
      id: machine.id || machine.machine_id,
      machine_name: machine.machine_name || "",
      category_id: machine.category_db_id || "",
      subcategory_id: machine.subcategory_db_id || "",
      image_url: machine.image_url || "",
      description: machine.description || "",
      specifications: flatSpecs.length
        ? flatSpecs
        : machineSpecs.length
          ? machineSpecs
          : [{ ...emptySpecification }],
      slug: machine.slug || "",
      meta_title: machine.meta_title || "",
      meta_description: machine.meta_description || "",
      machine_json:
        details.meta && Object.keys(details.meta).length + Object.keys(details.specifications).length + Object.keys(details.data).length
          ? JSON.stringify(details, null, 2)
          : ""
    });
    setImagePreview(machine.image_url || "");
    setImageFile(null);
    setDraftMessage("");
  };

  const saveMachineDraft = () => {
    localStorage.setItem("salvin_machine_draft", JSON.stringify({
      ...machineForm,
      slug: machineSlug
    }));
    setDraftMessage("Draft saved in this browser.");
  };

  async function handleMachineSubmit(event) {
    event.preventDefault();
    setMachineSubmitError("");
    setAdminActionError("");
    if (!machineForm.machine_name.trim()) {
      setMachineSubmitError("Machine name is required.");
      return;
    }
    if (!machineForm.category_id) {
      setMachineSubmitError("Select a category before publishing.");
      return;
    }
    try {
      setIsBusy(true);
      let detailsJson = null;
      if (machineForm.machine_json.trim()) {
        try {
          detailsJson = JSON.parse(machineForm.machine_json);
        } catch {
          setMachineSubmitError("Machine JSON is invalid. Use valid JSON format.");
          setIsBusy(false);
          return;
        }
      }
      const parsedDetails = detailsJson ? normalizeMachineDetails(detailsJson) : null;
      const machineNameFromMeta =
        parsedDetails?.meta?.name && String(parsedDetails.meta.name).trim()
          ? String(parsedDetails.meta.name).trim()
          : "";
      const payload = {
        ...machineForm,
        machine_name: machineForm.machine_name.trim() || machineNameFromMeta,
        meta_title: machineForm.meta_title.trim() || machineNameFromMeta || machineForm.machine_name.trim(),
        slug: machineSlug,
        specifications: JSON.stringify(
          parsedDetails || machineForm.specifications.filter((item) => item.title.trim() || item.value.trim())
        )
      };
      if (!payload.machine_name) {
        setMachineSubmitError("Machine name is required.");
        setIsBusy(false);
        return;
      }
      if (machineForm.id) {
        await onUpdateMachine(machineForm.id, payload, imageFile);
      } else {
        await onAddMachine(payload, imageFile);
      }
      resetMachineForm();
      event.target.reset();
      localStorage.removeItem("salvin_machine_draft");
    } catch (error) {
      setMachineSubmitError(error.message || "Machine could not be saved.");
    } finally {
      setIsBusy(false);
    }
  }

  async function handleCategorySubmit(event) {
    event.preventDefault();
    setCategorySubmitError("");
    setAdminActionError("");
    try {
      setIsBusy(true);
      if (categoryForm.id) {
        await onUpdateCategory(categoryForm.id, categoryForm.name);
      } else {
        await onAddCategory(categoryForm.name);
      }
      setCategoryForm({ id: "", name: "" });
    } catch (error) {
      setCategorySubmitError(error.message || "Category could not be saved.");
    } finally {
      setIsBusy(false);
    }
  }

  async function handleSubcategorySubmit(event) {
    event.preventDefault();
    setCategorySubmitError("");
    setAdminActionError("");
    try {
      setIsBusy(true);
      if (subcategoryForm.id) {
        await onUpdateSubcategory(subcategoryForm.id, subcategoryForm);
      } else {
        await onAddSubcategory(subcategoryForm);
      }
      setSubcategoryForm({ id: "", category_id: firstCategoryId, name: "" });
    } catch (error) {
      setCategorySubmitError(error.message || "Subcategory could not be saved.");
    } finally {
      setIsBusy(false);
    }
  }

  return (
    <section className="admin-page">
      {isCroppingImage && cropImageSrc && (
        <ImageCropModal
          src={cropImageSrc}
          crop={crop}
          zoom={zoom}
          setCrop={setCrop}
          setZoom={setZoom}
          onCropComplete={setCroppedAreaPixels}
          onCancel={closeCropper}
          onApply={applyCrop}
          error={cropError}
        />
      )}
      <div className="admin-shell">
        <header className="admin-hero">
          <div>
            <span className="admin-eyebrow">Admin Panel</span>
            <h1>Machine Management</h1>
            <p>Manage machines, media, categories, specifications, and SEO metadata from one clean workspace.</p>
          </div>
          <div className="admin-hero-count">
            <strong>{dashboard?.total_machines ?? machines.length}</strong>
            <span>Total Machines</span>
          </div>
        </header>

        <div className="admin-stat-grid" aria-label="Dashboard summary">
          <div className="admin-stat-card">
            <FaBoxOpen aria-hidden="true" />
            <div><span>Machines</span><strong>{dashboard?.total_machines ?? machines.length}</strong></div>
          </div>
          <div className="admin-stat-card">
            <FaLayerGroup aria-hidden="true" />
            <div><span>Categories</span><strong>{dashboard?.total_categories ?? categories.length}</strong></div>
          </div>
          <div className="admin-stat-card">
            <FaSitemap aria-hidden="true" />
            <div><span>Subcategories</span><strong>{dashboard?.total_subcategories ?? subcategories.length}</strong></div>
          </div>
          <div className="admin-stat-card">
            <FaRobot aria-hidden="true" />
            <div><span>Top Chat Question</span><strong>{topQuestionCount}</strong></div>
          </div>
        </div>

        <div className="admin-layout">
          <form className="admin-form-panel" onSubmit={handleMachineSubmit}>
            <div className="admin-panel-header">
              <div>
                <span className="admin-eyebrow">{machineForm.id ? "Update Entry" : "New Entry"}</span>
                <h2>{machineForm.id ? "Edit Machine" : "Add New Machine"}</h2>
              </div>
              {machineForm.id && <button className="admin-secondary-btn" type="button" onClick={resetMachineForm}>Cancel Edit</button>}
            </div>

            <div className="admin-form-section">
              <div className="admin-section-title">
                <FaRegEdit aria-hidden="true" />
                <div><h3>Basic Information</h3><p>Name, category, URL, and customer-facing description.</p></div>
              </div>
              <div className="admin-field-grid">
                <label>Machine Name
                  <input value={machineForm.machine_name} onChange={(e) => handleMachineNameChange(e.target.value)} placeholder="Example: Automatic Bottle Filling Machine" required />
                </label>
                <label>Category
                  <select value={machineForm.category_id} onChange={(e) => {
                    const categoryId = e.target.value;
                    const nextSubcategory = subcategories.find((item) => sameId(item.category_id, categoryId));
                    setMachineForm((prev) => ({ ...prev, category_id: categoryId, subcategory_id: nextSubcategory?.id || "" }));
                  }} required>
                    <option value="">Select category</option>
                    {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
                  </select>
                </label>
                <label>Subcategory
                  <select value={machineForm.subcategory_id} onChange={(e) => setMachineForm((prev) => ({ ...prev, subcategory_id: e.target.value }))}>
                    <option value="">No subcategory</option>
                    {filteredSubcategories.map((subcategory) => <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>)}
                  </select>
                </label>
                <label>URL Slug
                  <input value={machineSlug} onChange={(e) => setMachineForm((prev) => ({ ...prev, slug: createSlug(e.target.value) }))} placeholder="auto-generated-from-machine-name" />
                  <small>Auto-created from the machine name. You can edit it if needed.</small>
                </label>
              </div>
              <label>Description
                <textarea rows="4" value={machineForm.description} onChange={(e) => setMachineForm((prev) => ({ ...prev, description: e.target.value }))} placeholder="Briefly describe what this machine does and where it is used." required />
              </label>
            </div>

            <div className="admin-form-section">
              <div className="admin-section-title">
                <FaImage aria-hidden="true" />
                <div><h3>Images</h3><p>Upload a new image or keep an existing path/URL.</p></div>
              </div>
              <div className="admin-image-grid">
                <label className="admin-upload-box">Upload Machine Image
                  <input type="file" accept="image/png,image/jpeg,image/webp" onChange={handleImageChange} />
                  <span>PNG, JPG, or WEBP</span>
                </label>
                <div className="admin-preview-box">
                  {(imagePreview || machineForm.image_url) ? (
                    <img src={imagePreview || machineForm.image_url} alt="Machine preview" loading="lazy" />
                  ) : (
                    <span>No image selected</span>
                  )}
                </div>
              </div>
              <label>Existing Image Path
                <input placeholder="/assets/assets/uploads/machines/your-file.jpg or https://..." value={machineForm.image_url} onChange={(e) => setMachineForm((prev) => ({ ...prev, image_url: e.target.value }))} />
                <small>Use this when the image is already uploaded or hosted externally.</small>
              </label>
            </div>

            <div className="admin-form-section">
              <div className="admin-section-title">
                <FaTags aria-hidden="true" />
                <div><h3>Specifications & Additional Details</h3><p>Add any technical specs, features, capacity details, or custom metadata.</p></div>
              </div>
              <div className="admin-spec-list">
                {machineForm.specifications.map((spec, index) => (
                  <div key={index} className="admin-spec-row">
                    <input placeholder="Specification title, e.g. Capacity" value={spec.title} onChange={(e) => updateSpecification(index, "title", e.target.value)} />
                    <input placeholder="Value, e.g. 500 kg/hr" value={spec.value} onChange={(e) => updateSpecification(index, "value", e.target.value)} />
                    <button className="admin-icon-btn danger" type="button" onClick={() => removeSpecificationRow(index)} aria-label="Remove specification"><FaTrashAlt aria-hidden="true" /></button>
                  </div>
                ))}
              </div>
              <button className="admin-secondary-btn" type="button" onClick={addSpecificationRow}><FaPlus aria-hidden="true" /> Add Specification</button>
              <label>Machine JSON (Optional)
                <textarea
                  rows="10"
                  value={machineForm.machine_json}
                  onChange={(e) => setMachineForm((prev) => ({ ...prev, machine_json: e.target.value }))}
                  placeholder={`{\n  "Machine Overview": { "brand": "SALVIN", "name": "Machine Name" },\n  "specifications": { "Voltage": "220 V" },\n  "data": { "Driven Type": "Electric" }\n}`}
                />
                <small>If provided, JSON `meta/specifications/data` overrides spec rows and appears in machine detail card.</small>
              </label>
            </div>

            <div className="admin-form-section">
              <div className="admin-section-title">
                <FaSearch aria-hidden="true" />
                <div><h3>SEO Information</h3><p>Search preview title and description for this machine page.</p></div>
              </div>
              <label>Meta Title
                <input value={machineForm.meta_title} onChange={(e) => setMachineForm((prev) => ({ ...prev, meta_title: e.target.value }))} placeholder="SEO title for search results" />
              </label>
              <label>Meta Description
                <textarea rows="3" value={machineForm.meta_description} onChange={(e) => setMachineForm((prev) => ({ ...prev, meta_description: e.target.value }))} placeholder="Short summary shown in search results." />
              </label>
            </div>

            {(machineSubmitError || draftMessage || adminActionError) && (
              <p className={(machineSubmitError || adminActionError) ? "admin-error-text" : "admin-success-text"}>
                {machineSubmitError || adminActionError || draftMessage}
              </p>
            )}
            <div className="admin-form-actions">
              <button className="admin-secondary-btn" type="button" onClick={saveMachineDraft}><FaRegSave aria-hidden="true" /> Save Draft</button>
              <button className="admin-primary-btn" type="submit" disabled={isBusy}>{machineForm.id ? "Update Machine" : "Publish Machine"}</button>
            </div>
          </form>

          <aside className="admin-sidebar">
            <div className="admin-card">
              <div className="admin-panel-header compact">
                <div>
                  <span className="admin-eyebrow">Categories</span>
                  <h2>Structure</h2>
                </div>
              </div>
              <form onSubmit={handleCategorySubmit}>
                <label>Category<input value={categoryForm.name} onChange={(e) => setCategoryForm((prev) => ({ ...prev, name: e.target.value }))} required /></label>
                <button className="admin-primary-btn" type="submit" disabled={isBusy}>{categoryForm.id ? "Update Category" : "Add Category"}</button>
              </form>
              <form onSubmit={handleSubcategorySubmit}>
                <label>Parent Category
                  <select value={subcategoryForm.category_id} onChange={(e) => setSubcategoryForm((prev) => ({ ...prev, category_id: e.target.value }))}>
                    {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
                  </select>
                </label>
                <label>Subcategory<input value={subcategoryForm.name} onChange={(e) => setSubcategoryForm((prev) => ({ ...prev, name: e.target.value }))} required /></label>
                <button className="admin-secondary-btn" type="submit" disabled={isBusy}>{subcategoryForm.id ? "Update Subcategory" : "Add Subcategory"}</button>
              </form>
              {categorySubmitError && <p className="admin-error-text">{categorySubmitError}</p>}
              <div className="admin-list compact-list">
                {categories.map((category) => (
                  <div key={category.id} className="admin-list-row">
                    <div><strong>{category.name}</strong><p>{category.slug}</p></div>
                    <div className="admin-row-actions">
                      <button className="admin-icon-btn" type="button" onClick={() => setCategoryForm({ id: category.id, name: category.name })} aria-label={`Edit ${category.name}`}><FaRegEdit aria-hidden="true" /></button>
                      <button className="admin-icon-btn danger" type="button" onClick={async () => {
                        setAdminActionError("");
                        try {
                          setIsBusy(true);
                          await onDeleteCategory(category.id);
                        } catch (err) {
                          setAdminActionError(err?.message || "Category could not be deleted.");
                        } finally {
                          setIsBusy(false);
                        }
                      }} aria-label={`Remove ${category.name}`} disabled={isBusy}><FaTrashAlt aria-hidden="true" /></button>
                    </div>
                  </div>
                ))}
                {subcategoryFormOptions.map((subcategory) => (
                  <div key={subcategory.id} className="admin-list-row">
                    <div><strong>{subcategory.name}</strong><p>{subcategory.category_name}</p></div>
                    <div className="admin-row-actions">
                      <button className="admin-icon-btn" type="button" onClick={() => setSubcategoryForm({ id: subcategory.id, category_id: subcategory.category_id, name: subcategory.name })} aria-label={`Edit ${subcategory.name}`}><FaRegEdit aria-hidden="true" /></button>
                      <button className="admin-icon-btn danger" type="button" onClick={async () => {
                        setAdminActionError("");
                        try {
                          setIsBusy(true);
                          await onDeleteSubcategory(subcategory.id);
                        } catch (err) {
                          setAdminActionError(err?.message || "Subcategory could not be deleted.");
                        } finally {
                          setIsBusy(false);
                        }
                      }} aria-label={`Remove ${subcategory.name}`} disabled={isBusy}><FaTrashAlt aria-hidden="true" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="admin-card">
              <div className="admin-panel-header compact">
                <div>
                  <span className="admin-eyebrow">Chatbot Analytics</span>
                  <h2>Question Counts</h2>
                </div>
              </div>
              <div className="admin-analytics-list">
                {questionAnalytics.map((item) => (
                  <div key={`${item.event_type}-${item.target_id}`} className="admin-analytics-row">
                    <div>
                      <strong>{item.label}</strong>
                      <p>{item.target_id}</p>
                    </div>
                    <span>{item.count}</span>
                  </div>
                ))}
                {!questionAnalytics.length && <p className="admin-empty-state">No chatbot question clicks yet.</p>}
              </div>
              {!!machineAnalytics.length && (
                <>
                  <div className="admin-panel-header compact analytics-subhead">
                    <div>
                      <span className="admin-eyebrow">Machine Interest</span>
                      <h2>Machine Searches</h2>
                    </div>
                  </div>
                  <div className="admin-analytics-list">
                    {machineAnalytics.map((item) => (
                      <div key={`${item.event_type}-${item.target_id}`} className="admin-analytics-row">
                        <div>
                          <strong>{item.label}</strong>
                          <p>{item.target_id}</p>
                        </div>
                        <span>{item.count}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="admin-card">
              <div className="admin-panel-header compact">
                <div>
                  <span className="admin-eyebrow">Newest First</span>
                  <h2>All Machines</h2>
                </div>
                <strong>{visibleMachines.length}</strong>
              </div>
              <label className="admin-search-field">
                <FaSearch aria-hidden="true" />
                <input value={machineSearch} onChange={(e) => setMachineSearch(e.target.value)} placeholder="Search machines..." />
              </label>
              <div className="admin-list machine-list">
                {visibleMachines.map((machine) => (
                  <div key={machine.id || machine.machine_id} className="admin-list-row">
                    <div>
                      <strong>{machine.machine_name}</strong>
                      <p>{machine.category_id} | {machine.subcategory}</p>
                    </div>
                    <div className="admin-row-actions">
                      <button className="admin-icon-btn" type="button" onClick={() => editMachine(machine)} aria-label={`Edit ${machine.machine_name}`}><FaRegEdit aria-hidden="true" /></button>
                      <button className="admin-icon-btn danger" type="button" onClick={async () => {
                        setAdminActionError("");
                        try {
                          setIsBusy(true);
                          await onDeleteMachine(machine.id || machine.machine_id);
                        } catch (err) {
                          setAdminActionError(err?.message || "Machine could not be deleted.");
                        } finally {
                          setIsBusy(false);
                        }
                      }} aria-label={`Remove ${machine.machine_name}`} disabled={isBusy}><FaTrashAlt aria-hidden="true" /></button>
                    </div>
                  </div>
                ))}
                {!visibleMachines.length && <p className="admin-empty-state">No machines match your search.</p>}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ImageCropModal({ src, crop, zoom, setCrop, setZoom, onCropComplete, onCancel, onApply, error }) {
  return (
    <div className="modal-overlay" onClick={onCancel} role="dialog" aria-modal="true" aria-label="Crop image">
      <div className="modal-container cropper-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cropper-header">
          <h3>Crop Image</h3>
          <button type="button" className="admin-icon-btn" onClick={onCancel} aria-label="Close cropper">x</button>
        </div>
        <div className="cropper-body">
          <div className="cropper-stage">
            <Cropper
              image={src}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={(_area, areaPixels) => onCropComplete(areaPixels)}
            />
          </div>
          <div className="cropper-controls">
            <label className="cropper-zoom">
              Zoom
              <input type="range" min="1" max="3" step="0.01" value={zoom} onChange={(e) => setZoom(Number(e.target.value))} />
            </label>
            {error && <p className="admin-error-text">{error}</p>}
            <div className="cropper-actions">
              <button type="button" className="admin-secondary-btn" onClick={onCancel}>Cancel</button>
              <button type="button" className="admin-primary-btn" onClick={onApply}>Use Cropped</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const whyUsFeatures = [
  {
    icon: <FaCogs className="w-8 h-8 text-[#ff7a00]" />,
    title: "Decades of Expertise",
    text: "Over 15+ years of hands-on engineering mastery delivering high-capacity industrial plant solutions."
  },
  {
    icon: <FaRobot className="w-8 h-8 text-[#ff7a00]" />,
    title: "End-to-End Automation",
    text: "Fully integrated PLC, SCADA, and IoT-driven automation for maximum operational efficiency."
  },
  {
    icon: <FaTools className="w-8 h-8 text-[#ff7a00]" />,
    title: "Turnkey Execution",
    text: "Complete project execution from layout design, 3D modeling, fabrication, to final commissioning."
  },
  {
    icon: <FaHandshake className="w-8 h-8 text-[#ff7a00]" />,
    title: "Global Standards & Support",
    text: "Strict compliance with ISO, WHO-GMP, and FSSAI benchmarks with 24/7 global support."
  }
];

function HomePage() {
  const projectScrollRef = React.useRef(null);
  const heroVideoRef = React.useRef(null);

  React.useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = true;
      heroVideoRef.current.play().catch(() => {});
    }
  }, []);

  const scrollProjects = (direction) => {
    if (projectScrollRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      projectScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const [openFaq, setOpenFaq] = useState(0);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isHeroPreviewOpen, setIsHeroPreviewOpen] = useState(false);

  const heroSlides = [
    {
      key: "spices",
      eyebrow: "Salvin Industries",
      title: "Spices Processing Line",
      text: "Leading manufacturer of high-performance spice processing plants, grinding lines, blending, and automated packaging machinery.",
      cta: "Explore Spices Line",
      to: "/turnkey-project/red-chilli-processing-plant",
      image: spicesHeroImage,
      showText: true
    },
    {
      key: "snacks",
      eyebrow: "Salvin Industries",
      title: "Snacks Processing Line",
      text: "Complete turnkey processing lines for snack foods, potato chips, extruded snacks, fryers, and automated flavor coating systems.",
      cta: "Explore Snacks Line",
      to: "/turnkey-project",
      image: snacksHeroImage,
      showText: true
    },
    {
      key: "beverages",
      eyebrow: "Salvin Industries",
      title: "Beverages Projects",
      text: "Complete automated bottling, filling, and packaging lines for fruit juices, soft drinks, energy beverages & liquid plants.",
      cta: "Explore Beverage Projects",
      to: "/turnkey-project",
      image: beveragesHeroImage,
      showText: true
    },
    {
      key: "consultant",
      eyebrow: "Salvin Consultancy",
      title: "Supply Chain & Industrial Consultancy",
      text: "End-to-end industrial consultancy, supply chain optimization, plant layout design, and strategic product placement for food & processing plants.",
      cta: "Explore Consultancy",
      to: "/industrial-consultancy-services",
      image: spicesHeroImage,
      showText: true
    }
  ];

  React.useEffect(() => {
    const previewTimer = window.setTimeout(() => setIsHeroPreviewOpen(true), 3000);
    const slideTimer = window.setTimeout(() => {
      setActiveHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 7000);

    return () => {
      window.clearTimeout(previewTimer);
      window.clearTimeout(slideTimer);
    };
  }, [activeHeroIndex, heroSlides.length]);

  const goToHeroSlide = (index) => {
    setIsHeroPreviewOpen(false);
    setActiveHeroIndex((index + heroSlides.length) % heroSlides.length);
  };

  const activeHero = heroSlides[activeHeroIndex];
  const nextHeroIndex = (activeHeroIndex + 1) % heroSlides.length;

  const latestProjectsNews = [
    {
      title: "Honey Processing Plant in Rajkot",
      location: "Rajkot, Gujarat",
      category: "Food & Beverage",
      description: "Fully automated honey filtration, moisture reduction, and bottling line for premium organic honey production.",
      image: projHoney,
      link: "/turnkey-project",
    },
    {
      title: "Spices Processing & Packaging Line",
      location: "Rajkot, Gujarat",
      category: "Agro & Spices",
      description: "Comprehensive cleaning, grinding, and multi-track pouch packaging system for diverse spice blends.",
      image: projSpices,
      link: "/turnkey-project",
    },
    {
      title: "API Manufacturing Plant",
      location: "Vadodara, Gujarat",
      category: "Pharmaceuticals",
      description: "cGMP compliant API reactor systems and solvent recovery modules for a leading pharmaceutical house.",
      image: projApi,
      link: "/turnkey-project",
    },
    {
      title: "1000 TPH Red Chilli Processing Plant",
      location: "Mexico",
      category: "International Turnkey",
      description: "Massive-scale industrial cleaning, deseeded, and grinding plant with integrated climate-controlled storage.",
      image: projChilli,
      link: "/turnkey-project/red-chilli-processing-plant",
    },
    {
      title: "Puffed Rice Processing Plant",
      location: "Dakor, Gujarat",
      category: "Food Processing",
      description: "Energy-efficient continuous puffing and roasting line with automatic seasoning and moisture control.",
      image: projRice,
      link: "/turnkey-project",
    },
    {
      title: "Protein Bar Processing Line",
      location: "Gujarat, India",
      category: "Nutraceuticals & FMCG",
      description: "Integrated mixing, slab forming, cooling, cutting, and flow-wrap packaging line for high-output protein bar production.",
      image: projproteinbar,
      link: "/turnkey-project",
    },
  ];

  const [isProjectHovered, setIsProjectHovered] = useState(false);

  React.useEffect(() => {
    if (isProjectHovered) return;
    const projectTimer = window.setInterval(() => {
      setActiveProjectIndex((current) => (current + 1) % latestProjectsNews.length);
    }, 4000);
    return () => window.clearInterval(projectTimer);
  }, [isProjectHovered, latestProjectsNews.length]);

  const goToProjectSlide = (index) => {
    setActiveProjectIndex((index + latestProjectsNews.length) % latestProjectsNews.length);
  };

  const mainProject = latestProjectsNews[activeProjectIndex] || latestProjectsNews[0];
  const sideProject1Index = (activeProjectIndex + 1) % latestProjectsNews.length;
  const sideProject1 = latestProjectsNews[sideProject1Index];
  const sideProject2Index = (activeProjectIndex + 2) % latestProjectsNews.length;
  const sideProject2 = latestProjectsNews[sideProject2Index];

  const faqItems = [
    {
      question: "What type of industries does Salvin Serve?",
      answer:
        "We serve a wide range of industries including food & spices, pharmaceuticals, chemicals & APIs, dairy & beverages, FMCG, cosmetics, agriculture, and export-oriented manufacturing."
    },
    {
      question: "Do you offer complete turnkey plant setups or only individual machines?",
      answer: "We provide both turnkey solutions and individual machine setups based on your requirement."
    },
    {
      question: "What is your typical project delivery timeline?",
      answer: "Delivery timelines depend on project complexity, but typically range from 4 to 12 weeks."
    },
    {
      question: "Do you provide after-sales service and maintenance support?",
      answer: "Yes, we offer 24/7 support and AMC services for all installed systems."
    }
  ];

  const testimonialCards = [
    {
      name: "Rajesh Sharma",
      role: "Operations Director, FoodCorp India",
      image: "/assets/company/advisory/tech_advisory.webp",
      text: "Salvin Industries delivered an outstanding turnkey spices processing facility for us. Their team managed everything from layout design to final commissioning flawlessly."
    },
    {
      name: "Amit Patel",
      role: "Managing Director, Apex Agro Foods",
      image: "/assets/company/advisory/engineering.webp",
      text: "Exceptional machinery quality and professional engineering consultancy. The automated packaging line increased our daily output by 40%."
    }
  ];

  const coreServicesData = [
    {
      id: "01",
      title: "Industrial Consultancy",
      image: "/assets/core/services/service_consultancy.jpg",
      to: "/industrial-consultancy-services",
      icon: <FaDraftingCompass className="w-5 h-5 text-[#ff7a00]" />,
      bullets: [
        "Project Feasibility & Planning",
        "Product & Process Consultancy",
        "Plant Concept & Strategy",
        "Capacity Planning",
        "Cost & Investment Planning"
      ]
    },
    {
      id: "02",
      title: "Plant Design & Engineering",
      image: "/assets/core/services/service_plant_design.jpg",
      to: "/plant-design-engineering-services",
      icon: <FaPencilRuler className="w-5 h-5 text-[#ff7a00]" />,
      bullets: [
        "Plant Layout & Process Flow",
        "Utility Planning",
        "Production Line Design",
        "Material Flow Planning",
        "Engineering & Documentation"
      ]
    },
    {
      id: "03",
      title: "Turnkey Project Execution",
      image: "/assets/core/services/service_turnkey.jpg",
      to: "/turnkey-project-execution-services",
      icon: <FaHandshake className="w-5 h-5 text-[#ff7a00]" />,
      bullets: [
        "Greenfield & Brownfield Projects",
        "Civil & Infrastructure Coordination",
        "Plant Installation",
        "Project Management",
        "Commissioning & Handover"
      ]
    },
    {
      id: "04",
      title: "Machinery & Equipment",
      image: "/assets/core/services/service_machinery.jpg",
      to: "/machinery-equipment-solutions",
      icon: <FaTools className="w-5 h-5 text-[#ff7a00]" />,
      bullets: [
        "Machinery Selection",
        "Processing Machinery",
        "Filling & Packaging Machinery",
        "Complete Production Lines",
        "Equipment Integration & Installation"
      ]
    },
    {
      id: "05",
      title: "Processing & Packaging Solutions",
      image: "/assets/core/services/service_processing_packaging.jpg",
      to: "/processing-packaging-solutions",
      icon: <FaCogs className="w-5 h-5 text-[#ff7a00]" />,
      bullets: [
        "Powder Processing",
        "Liquid Processing",
        "Granule Processing",
        "Filling & Packaging",
        "Automated Production Lines"
      ]
    },
    {
      id: "06",
      title: "Supply Chain & Procurement",
      image: "/assets/core/services/service_supply_chain.jpg",
      to: "/supply-chain-procurement-services",
      icon: <FaTruck className="w-5 h-5 text-[#ff7a00]" />,
      bullets: [
        "Raw Material Sourcing",
        "Vendor Development",
        "Equipment Procurement",
        "Packaging Material Coordination",
        "Logistics & Material Flow Planning"
      ]
    },
    {
      id: "07",
      title: "Production & Process Optimization",
      image: "/assets/core/services/service_optimization.jpg",
      to: "/production-process-optimization",
      icon: <FaChartLine className="w-5 h-5 text-[#ff7a00]" />,
      bullets: [
        "Production Line Optimization",
        "Process Improvement",
        "Capacity Enhancement",
        "Automation & Efficiency",
        "Cost Optimization"
      ]
    },
    {
      id: "08",
      title: "Contract Manufacturing & Packaging",
      image: "/assets/core/services/service_contract_manufacturing.jpg",
      to: "/contract-manufacturing-packaging",
      icon: <FaBoxOpen className="w-5 h-5 text-[#ff7a00]" />,
      bullets: [
        "Third-Party Manufacturing",
        "Contract Packaging",
        "Pouch / Sachet / Jar / Bottle Packaging",
        "Product Scale-up",
        "Commercial Production Support"
      ]
    }
  ];

  const industriesServedData = [
    {
      id: "food-beverage",
      name: "Food & Beverage",
      image: "/assets/industries/food_beverages.webp?v=prod3",
      description: "End-to-end turnkey processing lines, liquid bottling plants, automated powder blenders, thermal processing, and sanitary stainless steel conveying systems designed to FSSAI and FDA hygiene standards."
    },
    {
      id: "pharmaceuticals",
      name: "Pharmaceuticals",
      image: "/assets/industries/pharma.jpg?v=prod2",
      description: "cGMP and WHO-GMP compliant cleanroom processing setups, SS316L reactors, granulators, sterile fluid handling, and automated blister/vial packaging solutions engineered for precision dosage and compliance."
    },
    {
      id: "nutraceuticals",
      name: "Nutraceuticals",
      image: "/assets/industries/nutraceuticals.jpg?v=prod3",
      description: "Advanced encapsulation lines, dietary supplement blending, effervescent tablet press integration, and pouching systems optimized for maximum ingredient purity and active compound protection."
    },
    {
      id: "chemicals",
      name: "Chemicals",
      image: "/assets/industries/chemicals.webp?v=prod3",
      description: "Heavy-duty chemical synthesis reactors, heat exchangers, distillation columns, hazardous material handling systems, and automated bulk liquid transfer units engineered to ASME standards."
    },
    {
      id: "agro-processing",
      name: "Agro Processing",
      image: "/assets/industries/agro.avif?v=prod3",
      description: "High-capacity grain milling, spice pulverization, pulse processing, seed cleaning, and optical sorting infrastructure designed for high yield and minimal wastage."
    },
    {
      id: "cosmetics",
      name: "Cosmetics & Personal Care",
      image: "/assets/industries/cosmetics.jpg?v=prod2",
      description: "Vacuum homogenizers, cream & lotion emulsifiers, tube filling, shampoo compounding tanks, and perfume filtration lines providing ultra-smooth texture and seamless packaging."
    },
    {
      id: "packaging",
      name: "Packaging",
      image: "/assets/industries/packaging.jpg?v=prod2",
      description: "High-speed vertical form-fill-seal (VFFS), pouch packing, multi-head weighers, automated cartooning, shrink wrapping, and robotic palletizing systems."
    },
    {
      id: "aerospace-defence",
      name: "Aerospace & Defence",
      image: "/assets/industries/aerospace.jpg?v=prod3",
      description: "Precision CNC machining setups, alloy heat treatment furnaces, high-tolerance component assembly lines, and rigorous quality inspection rigs for critical aerospace components."
    },
    {
      id: "plastics-polymers",
      name: "Plastics & Polymers",
      image: "/assets/industries/polymer.jpg?v=prod3",
      description: "Heavy plastic extrusion lines, blow molding plants, polymer compounding extruders, and automated scrap recycling systems engineered for continuous 24/7 operation."
    },
    {
      id: "fmcg-consumer",
      name: "FMCG & Consumer Goods",
      image: "/assets/industries/fmcg.jpg?v=prod3",
      description: "High-throughput manufacturing, liquid filling, bar soap finishing, detergent powder processing, and high-speed end-of-line secondary packaging automation."
    },
    {
      id: "renewable-energy",
      name: "Renewable Energy",
      image: "/assets/industries/renewable_energy.jpg?v=prod2",
      description: "Solar panel assembly lines, wind turbine structural component fabrication, battery module packing lines, and green energy infrastructure utility integration."
    },
    {
      id: "water-wastewater",
      name: "Water & Wastewater",
      image: "/assets/industries/water.jpg?v=prod2",
      description: "Industrial Reverse Osmosis (RO) plants, Effluent Treatment Plants (ETP), Sewage Treatment Plants (STP), and zero liquid discharge (ZLD) systems engineered for complete environmental compliance."
    }
  ];

  const [activeIndustryId, setActiveIndustryId] = useState("food-beverage");
  const activeIndustry = industriesServedData.find(item => item.id === activeIndustryId) || industriesServedData[0];

  return (
    <div className="home-template min-w-0 overflow-x-hidden">
      {/* HERO */}
      <section
        className="hero"
        id="home"
      >
        <video
          ref={heroVideoRef}
          className="hero-bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/videos/hero_video.mp4" type="video/mp4" />
        </video>
      </section>

      {/* CORE SERVICES */}
      <section className="industry" id="services">
        <div className="content-container">
          <div className="section-header">
            <h2>Our <span>Services</span></h2>
          </div>

          <div className="core-services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {coreServicesData.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                {/* Image & Overlay Badge */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    onError={(e) => {
                      if (e.currentTarget.src.includes('.jpg')) {
                        e.currentTarget.src = item.image.replace('.jpg', '.webp');
                      } else if (e.currentTarget.src.includes('.webp')) {
                        e.currentTarget.src = item.image.replace('.webp', '.jpg');
                      }
                    }}
                  />
                  {/* Circular Icon Badge */}
                  <div className="absolute -bottom-5 left-6 w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col pt-8 pb-6 px-6">
                  {/* Number tag */}
                  <span className="text-xs font-bold text-[#ff7a00] tracking-wider mb-1">
                    {item.id}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold leading-snug text-[#091938] mb-4 group-hover:text-[#ff7a00] transition-colors">
                    {item.title}
                  </h3>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-6 flex-1 text-sm text-slate-700 font-medium">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#ff7a00] font-bold text-xs select-none mt-0.5">•</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA link */}
                  <NavLink
                    to={item.to}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#ff7a00] hover:text-[#e56d00] transition-colors mt-auto pt-2 border-t border-slate-100"
                  >
                    VIEW SOLUTIONS <span className="transition-transform group-hover:translate-x-1">→</span>
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="content-container">
          <div className="section-header">
            <h2>About <span>The Company</span></h2>
          </div>

          <div className="space-y-4 text-[#555555] text-base leading-relaxed mb-8">
            <p>
              Salvin Industries is a trusted leader in providing comprehensive turnkey solutions and technical consultancy for the food &amp; beverage, pharmaceutical, chemical, aerospace, energy, cosmetic, and specialty manufacturing industries.
            </p>
            <p>
              We specialize in delivering end-to-end engineering services that cover every stage of your industrial project—from concept design and 3D plant layout planning to custom machinery fabrication, installation, and final commissioning. Our multidisciplinary team ensures seamless project execution, cost-effective capital deployment, and dependable long-term performance.
            </p>
            <p>
              Backed by over 15+ years of engineering mastery and 120+ successfully commissioned turnkey projects across India and international markets, Salvin Industries combines advanced manufacturing technologies, high-grade SS304/SS316L fabrication, and strict compliance with ISO 9001, WHO-GMP, FSSAI, and ASME benchmarks to help manufacturers scale with complete confidence.
            </p>
          </div>

          {/* 4 METRIC STAT CARDS ROW */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#ff7a00] block mb-1">15+</span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0b1c2c]">Years Mastery</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#ff7a00] block mb-1">120+</span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0b1c2c]">Turnkey Plants</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#ff7a00] block mb-1">5+</span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0b1c2c]">Nations Reached</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#ff7a00] block mb-1">100%</span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0b1c2c]">ISO &amp; cGMP</span>
            </div>
          </div>
        </div>
      </section>

      {/* TATVASOFT-STYLE HORIZONTAL EXPANDABLE ACCORDION SECTION */}
      <section className="industries-accordion-section py-16 bg-[#eef3f8]">
        <div className="content-container max-w-[1400px] mx-auto px-4">
          <div className="section-header mb-8">
            <h2>Industries <span>We Serve</span></h2>
            <p className="desc">
              Tailored turnkey engineering and automation solutions engineered for maximum throughput across 12 core verticals.
            </p>
          </div>

          <div className="bg-[#e9f0f8] rounded-3xl p-3 sm:p-5 shadow-sm border border-slate-200/80 overflow-hidden">
            <div className="tatvasoft-accordion-wrapper">
              
              {industriesServedData.map((ind) => {
                const isActive = ind.id === activeIndustryId;

                if (isActive) {
                  return (
                    <div
                      key={ind.id}
                      className="tatvasoft-active-card flex-1 min-w-[300px] sm:min-w-[650px] bg-white rounded-2xl border border-slate-200/90 shadow-lg flex flex-col md:flex-row overflow-hidden transition-all duration-500"
                    >
                      {/* Left Image Square */}
                      <div className="md:w-5/12 relative h-64 md:h-auto overflow-hidden bg-slate-200">
                        <img
                          src={ind.image}
                          alt={ind.name}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>

                      {/* Right Detail Panel */}
                      <div className="md:w-7/12 p-6 sm:p-10 flex flex-col justify-center bg-[#f8fafc]">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2c] mb-4">
                          {ind.name}
                        </h3>
                        <p className="text-[#555555] text-base sm:text-lg leading-relaxed">
                          {ind.description}
                        </p>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={ind.id}
                    onClick={() => setActiveIndustryId(ind.id)}
                    className="tatvasoft-collapsed-tab group"
                    title={ind.name}
                  >
                    <span className="tatvasoft-vertical-title group-hover:text-[#ff7a00] transition-colors">
                      {ind.name}
                    </span>
                    <div className="tatvasoft-plus-icon group-hover:scale-110">
                      +
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* CLIENT VOICE */}
      <section className="client-container">
        <section className="content-container">
          <div className="section-header">
            <div className="header-row">
              <h2>What Our <span>Clients</span> Say</h2>
              <p className="rating">4.6+ Rating<br /><small>Based on 120+ verified reviews</small></p>
            </div>
          </div>
          <div className="testimonial-wrapper">
            {testimonialCards.slice(0, 2).map((item) => (
              <div className="card testimonial-card-home" key={item.name}>
                <div className="quote-icon-wrap">
                  <svg className="quote-icon-svg" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 32V19.2C0 15.7333 0.533333 12.5333 1.6 9.6C2.66667 6.66667 4.53333 3.73333 7.2 0.800003L12.8 4.00001C10.9333 6.4 9.6 8.66667 8.8 10.8C8 12.9333 7.46667 15.2 7.2 17.6H14.4V32H0ZM22.4 32V19.2C22.4 15.7333 22.9333 12.5333 24 9.6C25.0667 6.66667 26.9333 3.73333 29.6 0.800003L35.2 4.00001C33.3333 6.4 32 8.66667 31.2 10.8C30.4 12.9333 29.8667 15.2 29.6 17.6H36.8V32H22.4Z" fill="#F5A663" />
                  </svg>
                </div>
                <p className="quote">{item.text}</p>
                <div className="user">
                  <img src={item.image} alt={item.name} />
                  <div className="user-info">
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-us-container">
        <section className="content-container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <h2 className="!m-0">Why Leading Industries <span>Choose Salvin</span></h2>
            <p className="desc !max-w-xl !m-0">
              For over two decades, Salvin Industries has been the trusted automation partner
              for plants across 30+ nations—delivering precision, reliability, and performance at scale.
            </p>
          </div>
          <div className="features">
            {whyUsFeatures.map((item) => (
              <div className="feature-box" key={item.title}>
                <div className="feat-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* FAQ */}
      <section className="faq-container">
        <section className="content-container">
          <div className="section-header">
            <h2>Frequently Asked <span>Questions</span></h2>
          </div>
          <div className="faq">
            {faqItems.map((item, index) => (
              <div key={item.question} className={`faq-item ${openFaq === index ? "active" : ""}`}>
                <button className="faq-question-btn" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                  <span>{item.question}</span>
                  <span className="faq-toggle-icon">{openFaq === index ? "−" : "+"}</span>
                </button>
                <div className={`faq-answer ${openFaq === index ? "show" : ""}`}>{item.answer}</div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* PROJECTS & NEWS HORIZONTAL SCROLLBAR CAROUSEL */}
      <section className="industry py-14 bg-slate-50/70" id="projects">
        <div className="content-container">
          
          {/* Header & Scroll Arrow Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-6 border-b border-slate-200/60 pb-6">
            <div>
              <div className="section-header !mb-0 !text-left">
                <h2 className="!text-left">Latest <span>Projects &amp; News</span></h2>
              </div>
            </div>

            {/* Right side: Description text + Navigation Arrows */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:max-w-2xl flex-1 justify-end">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-md text-left lg:text-right">
                Targeted engineering expertise across sectors with a relentless focus on operational efficiency and scalable architecture.
              </p>
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => scrollProjects("left")}
                  className="w-11 h-11 rounded-full border border-slate-200 bg-white text-[#091938] hover:bg-[#ff7a00] hover:text-white hover:border-[#ff7a00] flex items-center justify-center text-xl font-bold shadow-sm transition-all hover:scale-105"
                  aria-label="Scroll Left"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => scrollProjects("right")}
                  className="w-11 h-11 rounded-full border border-slate-200 bg-white text-[#091938] hover:bg-[#ff7a00] hover:text-white hover:border-[#ff7a00] flex items-center justify-center text-xl font-bold shadow-sm transition-all hover:scale-105"
                  aria-label="Scroll Right"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Scroll Track */}
          <div
            ref={projectScrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 px-1 focus:outline-none"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#ff7a00 #e2e8f0" }}
          >
            {latestProjectsNews.map((item) => (
              <article
                key={item.title}
                className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.14)] hover:-translate-y-1.5"
              >
                {/* Big Image Container */}
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Location Badge */}
                  <span className="absolute bottom-3 right-3 bg-[#091938]/85 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-md border border-white/10">
                    <svg className="w-3.5 h-3.5 text-[#ff7a00]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {item.location}
                  </span>
                </div>

                {/* Only Title below */}
                <div className="p-4 sm:p-5 bg-white flex items-center justify-center text-center">
                  <h3 className="text-base sm:text-lg font-bold text-[#091938] leading-snug group-hover:text-[#ff7a00] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#091938] via-[#112a55] to-[#091938] p-8 md:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[#ff7a00] text-xs font-bold uppercase tracking-widest">Tailored Industrial Engineering</span>
              <h3 className="text-xl md:text-2xl font-bold">Have a Custom Project in Mind?</h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Our multidisciplinary engineering team is ready to design, fabricate, and commission your next turnkey plant.
              </p>
            </div>
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#ff7a00] hover:bg-[#e56d00] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 whitespace-nowrap"
            >
              DISCUSS YOUR PROJECT <span className="text-lg">→</span>
            </NavLink>
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE SECTION */}
      <section className="global-presence-section">
        <div className="content-container">
          <div className="section-header">
            <h2>Our Global <span>Presence</span></h2>
            <p className="desc">
              Engineering excellence knows no borders. From our headquarters in India, we have expanded our reach
              to deliver turnkey solutions and specialized machinery across 30+ nations.
            </p>
          </div>

          <div className="global-grid">
            <div className="global-stat-card">
              <div className="stat-number">8+</div>
              <div className="stat-label">Countries Served</div>
              <p>Active installations across Asia, Africa, Middle East, and Latin America.</p>
            </div>
            <div className="global-stat-card">
              <div className="stat-number">350+</div>
              <div className="stat-label">Projects Completed</div>
              <p>Successfully commissioned production lines for diverse industrial sectors.</p>
            </div>
            <div className="global-stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Technical Support</div>
              <p>Remote and on-site assistance for global manufacturing operations.</p>
            </div>
          </div>

          <div className="global-regions">
            <div className="region-box">
              <h4>Middle East</h4>
              <p>UAE, Saudi Arabia, Oman, Qatar</p>
            </div>
            <div className="region-box">
              <h4>Africa</h4>
              <p>Nigeria, Kenya, Ethiopia, Algeria</p>
            </div>
            <div className="region-box">
              <h4>Asia</h4>
              <p>India, Bangladesh, Vietnam, Thailand</p>
            </div>
            <div className="region-box">
              <h4>Americas</h4>
              <p>Mexico, Brazil, Colombia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + FOOTER */}
      <section className="cta-footer">
        <div className="cta-box">
          <h2>READY TO BUILD YOUR DREAM PLANT?</h2>
          <p>Explore how our legacy of precision engineering can optimize your next industrial project.</p>
          <NavLink to="/contact"><button>CONTACT US</button></NavLink>
        </div>

      </section>
    </div>
  );
}

function AboutPage() {
  return <About />;
}

const journeyData = [
  {
    id: "01",
    year: "2009",
    title: "Packaging Unit",
    desc: "Foundational entry into high-precision industrial packaging, setting the benchmark for engineering reliability.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
    side: "left"
  },
  {
    id: "02",
    year: "2011",
    title: "Fully Automatic Design",
    desc: "Pioneering zero-intervention automation systems to maximize manufacturing efficiency and performance.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    side: "right"
  },
  {
    id: "03",
    year: "2013",
    title: "Processing Mfg",
    desc: "Expanding into complex processing engineering for high-growth food and pharmaceutical industries.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
    side: "left"
  },
  {
    id: "04",
    year: "2015",
    title: "Reactors & Vessel Design",
    desc: "Advanced heavy-duty fabrication of chemical reactors and pressure vessels for critical applications.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="22"></line><line x1="9" y1="22" x2="15" y2="22"></line></svg>,
    side: "right"
  },
  {
    id: "05",
    year: "2017",
    title: "Pharma Consultant",
    desc: "Launched strategic engineering consultancy, optimizing plant layouts for global regulatory standards.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    side: "left"
  },
  {
    id: "06",
    year: "2019",
    title: "GMP Plant Design",
    desc: "Implementing global GMP standards in turnkey plant architecture and facility engineering.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>,
    side: "right"
  },
  {
    id: "07",
    year: "2021",
    title: "Contract Packaging",
    desc: "Scalable, high-speed contract packaging solutions for premium global beauty and food brands.",
    image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>,
    side: "left"
  },
  {
    id: "08",
    year: "2023",
    title: "International Projects",
    desc: "Executing large-scale international turnkey projects, establishing a global engineering footprint.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1-4-10z"></path></svg>,
    side: "right"
  },
  {
    id: "09",
    year: "2025",
    title: "Automation 4.0 Era",
    desc: "Leading the next industrial revolution with AI-driven Automation 4.0 and smart factory solutions.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
    side: "left"
  }
];

function ContactJourneySection() {
  return (
    <section className="journey-timeline-section">
      <div className="journey-header">
        <div className="journey-badge">
          <span></span>SINCE 2009
        </div>
        <h2>Our <span>Journey</span></h2>
        <p>An engineering roadmap of precision, innovation, and global expansion.</p>
      </div>

      <div className="journey-timeline-wrapper">
        <div className="journey-timeline-line"></div>
        {journeyData.map((item) => (
          <div key={item.id} className={`journey-item ${item.side}`}>
            {/* Empty space for the opposite side */}
            <div className="journey-spacer"></div>

            {/* Center Node */}
            <div className="journey-node">{item.id}</div>

            {/* Content Wrapper */}
            <div className="journey-content-wrapper">
              <div className="journey-connector"></div>
              <div className="journey-card">
                <img src={item.image} alt={item.title} className="journey-card-img" />
                <div className="journey-card-info">
                  <div className="journey-year">{item.year}</div>
                  <h4 className="journey-card-title">{item.title}</h4>
                  <p className="journey-card-desc">{item.desc}</p>
                </div>
                <div className="journey-icon-wrap">
                  {item.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  const [state, setState] = useState({ submitting: false, succeeded: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ submitting: true, succeeded: false, error: null });
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mlgpkkjj", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Accept": "application/json", "Content-Type": "application/json" }
      });
      if (response.ok) {
        setState({ submitting: false, succeeded: true, error: null });
        e.target.reset();
      } else {
        const result = await response.json();
        setState({ submitting: false, succeeded: false, error: result.error || "Something went wrong." });
      }
    } catch (err) {
      setState({ submitting: false, succeeded: false, error: "Network error. Please try again." });
    }
  };

  return (
    <div className="contact-page-new min-w-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-tag">★ ENGINEERING EXCELLENCE</span>
          <h1>Engineering Projects Built for Scale</h1>
          <p>
            Delivering high-performance turnkey processing plants and automated production
            lines worldwide. Our engineering solutions are built for durability, efficiency, and
            industrial-grade output. 350+ Turnkey projects across 30+ countries. We don't just build
            machines; we build operational legacy.
          </p>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="contact-inquiry-section">
        <div className="contact-container">
          <h2 className="section-title text-left">Send Inquiry</h2>
          <div className="inquiry-grid">
            {/* Form */}
            <div className="inquiry-form-wrapper">
              <form className="inquiry-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <span className="input-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </span>
                  <input type="text" name="name" placeholder="Full Name" required />
                </div>
                <div className="input-group">
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
                <div className="input-group">
                  <span className="input-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </span>
                  <input type="tel" name="phone" placeholder="Phone Number" required />
                </div>
                <div className="input-group">
                  <textarea name="message" rows="4" placeholder="Describe your requirement..." required></textarea>
                </div>
                <button type="submit" className="submit-inquiry-btn" disabled={state.submitting}>
                  {state.submitting ? "SENDING..." : "SUBMIT INQUIRY"}
                </button>
                {state.succeeded && <p style={{ color: "green", marginTop: "10px", fontWeight: "bold" }}>Thanks! Your inquiry has been sent.</p>}
                {state.error && <p style={{ color: "red", marginTop: "10px" }}>{state.error}</p>}
                <div className="form-disclaimer">
                  <small>• We typically respond within 24 hours.</small>
                  <small>• We respect your privacy. Your information is safe with us.</small>
                </div>
              </form>
            </div>

            {/* Contact Info Cards */}
            <div className="inquiry-info-wrapper">
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="#f58220" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="info-details">
                  <strong>Call Us</strong>
                  <span>+91 9898727796 / +91 9023979663 / +91 9712777034</span>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="#f58220" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="info-details">
                  <strong>Email</strong>
                  <span>info.salvinindustries@gmail.com</span>
                </div>
              </div>
              <div className="help-card">
                <strong>Need Quick Help?</strong>
                <p>Talk directly with our support team</p>
                <a href="#" className="support-link">Contact Support &rarr;</a>
                <div style={{ marginTop: "1rem" }}>
                  <a href="https://www.salvinindustires.com/" target="_blank" rel="noopener noreferrer" className="support-link" style={{ color: "#666", fontSize: "0.85rem" }}>for corporate Use Only &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Section */}
      <section className="contact-dept-section">
        <div className="contact-container">
          <h2 className="section-title text-center">Salvin Family</h2>
          <div className="dept-grid">

            {/* Dept Cards */}
            <div className="dept-card">
              <div className="dept-info">
                <strong>Managing Director</strong>
                <span>Keval Gandhi</span>
                <a href="mailto:md.salvinindustries@gmail.com">md.salvinindustries@gmail.com</a>
              </div>
            </div>

            {/* <div className="dept-card">
              <div className="dept-info">
                <strong>CEO</strong>
                <span>Priya Rajput</span>
                <a href="mailto:ceo.salvin@gmail.com">ceo.salvin@gmail.com</a>
              </div>
            </div> */}

            <div className="dept-card">
              <div className="dept-info">
                <strong>General Manager</strong>
                <span>Nidhi Shah</span>
                <a href="mailto:gm.salvinindustrirs@outlook.com">gm.salvinindustrirs@outlook.com</a>
              </div>
            </div>

            <div className="dept-card">
              <div className="dept-info">
                <strong>Automation Head</strong>
                <span>Mansi Gajera </span>
                <a href="mailto:info.salvinindustries@gmail.com">info.salvinindustries@gmail.com</a>
              </div>
            </div>

            <div className="dept-card">
              <div className="dept-info">
                <strong>IT Support</strong>
                <span>Digesh Prajapati</span>
                <a href="mailto:it.salvinindustries@gmail.com">it.salvinindustries@gmail.com</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      {/* <ContactJourneySection /> */}
    </div>
  );
}



export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname === "/admin" ||
    location.pathname === "/admin-login" ||
    location.pathname === "/admin-panel";
  const [showIntro, setShowIntro] = useState(false);
  const [machines, setMachines] = useState(initialMachines);
  const [machineLoadError, setMachineLoadError] = useState("");

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [dashboard, setDashboard] = useState(null);
  const [chatbotAnalytics, setChatbotAnalytics] = useState([]);

  const [sessionImageCache, setSessionImageCache] = useState({});

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    () => !!localStorage.getItem("salvin_auth_token")
  );

  // Dynamic SEO metadata update on path change
  React.useEffect(() => {
    if (isAdminRoute) return;

    const updateMetaTags = (title, description, path) => {
      document.title = `${title} | Salvin Industries`;

      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", `https://salvinindia.com${path}`);

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", description);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", `${title} | Salvin Industries`);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", description);

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", `https://salvinindia.com${path}`);

      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute("content", `${title} | Salvin Industries`);

      const twitterDesc = document.querySelector('meta[property="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute("content", description);
    };

    let path = location.pathname;
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    if (path === "/") {
      updateMetaTags(
        "Turnkey Solution & Consultant For Food Industries",
        "Salvin Industries is a leading engineering, consultancy, automation, and turnkey project company specializing in the Food, Beverage, Nutraceutical, and Pharmaceutical sectors.",
        path
      );
    } else if (path === "/about") {
      updateMetaTags(
        "Our Journey & Engineering Expertise",
        "Learn about Salvin Industries' journey since 2008 in engineering India's industrial future with high-quality process lines and machinery.",
        path
      );
    } else if (path === "/contact") {
      updateMetaTags(
        "Contact Us for Turnkey Projects & Machinery",
        "Get in touch with Salvin Industries for quotes, consultation, and support on industrial machineries, turnkey projects, and spares.",
        path
      );
    } else if (path === "/food-consultant" || path === "/services") {
      updateMetaTags(
        "Food Processing Plant & Project Consultant | Salvin Industries",
        "Top food processing plant consultants in India by Salvin Industries. Complete turnkey solutions, factory layouts, DPR reports, and FSSAI guidance.",
        path
      );
    } else if (path === "/turnkey") {
      updateMetaTags(
        "Turnkey Plant Architectural & Commissioning",
        "End-to-end plant design, equipment sizing, manufacturing, installation, and commissioning of turnkey processing and packaging lines.",
        path
      );
    } else if (path === "/turnkey-project") {
      updateMetaTags(
        "Our Successful Turnkey Projects Portfolio",
        "Browse our turnkey project portfolio including spices grinding lines, honey filtration units, edible oil mills, and tomato paste plants.",
        path
      );
    } else if (path === "/machineries") {
      updateMetaTags(
        "Industrial Processing & Packaging Machinery Catalog",
        "Explore our wide range of robust, heavy-duty machinery for filling, capping, labeling, processing, and packaging food and pharma products.",
        path
      );
    } else {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", `https://salvinindia.com${path}`);

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", `https://salvinindia.com${path}`);
    }
  }, [location.pathname, isAdminRoute]);

  // Trigger GA4 Page Views on Route Change
  React.useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname
      });
    }
  }, [location.pathname]);

  React.useEffect(() => {
    const isCatalogPage =
      location.pathname === "/machineries" || location.pathname.startsWith("/machineries/");
    const isAdminPage = location.pathname === "/admin-panel" && isAdminAuthenticated;

    if (!isCatalogPage && !isAdminPage) return;

    const loadData = () => {
      fetchJson("/api/machines")
        .then((data) => {
          setMachines(Array.isArray(data) ? data : []);
          setMachineLoadError("");
        })
        .catch((error) => {
          if (isAdminPage) {
            console.error("Unable to load machines:", error);
            setMachineLoadError("Machine data not found.");
          }
        });

      Promise.all([
        fetchJson("/api/categories").catch(() => []),
        fetchJson("/api/subcategories").catch(() => []),
      ]).then(([categoryRows, subcategoryRows]) => {
        setCategories(Array.isArray(categoryRows) ? categoryRows : []);
        setSubcategories(Array.isArray(subcategoryRows) ? subcategoryRows : []);
      });

      if (isAdminPage) {
        fetchJson("/api/dashboard")
          .then((data) => setDashboard(data))
          .catch(() => setDashboard(null));
        fetchJson("/api/chatbot-analytics")
          .then((data) => setChatbotAnalytics(Array.isArray(data) ? data : []))
          .catch(() => setChatbotAnalytics([]));
      }
    };

    loadData();
    if (!isAdminPage) return;

    const refreshTimer = window.setInterval(loadData, 15000);
    return () => window.clearInterval(refreshTimer);
  }, [isAdminAuthenticated, location.pathname]);

  const refreshAdminData = async () => {
    const [machineRows, categoryRows, subcategoryRows] = await Promise.all([
      fetchJson("/api/machines").catch(() => []),
      fetchJson("/api/categories").catch(() => []),
      fetchJson("/api/subcategories").catch(() => []),
    ]);
    setMachines(Array.isArray(machineRows) ? machineRows : []);
    setCategories(Array.isArray(categoryRows) ? categoryRows : []);
    setSubcategories(Array.isArray(subcategoryRows) ? subcategoryRows : []);
    if (localStorage.getItem("salvin_auth_token")) {
      setDashboard(await fetchJson("/api/dashboard").catch(() => null));
      const analyticsRows = await fetchJson("/api/chatbot-analytics").catch(() => []);
      setChatbotAnalytics(Array.isArray(analyticsRows) ? analyticsRows : []);
    }
  };

  const addCategory = async (value) => {
    const normalized = value.trim();
    if (!normalized) return;
    await fetchJson("/api/categories", {
      method: "POST",
      body: JSON.stringify({ name: normalized }),
    });
    await refreshAdminData();
  };

  const updateCategory = async (id, value) => {
    await fetchJson(`/api/categories/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name: value.trim() }),
    });
    await refreshAdminData();
  };

  const deleteCategory = async (id) => {
    await fetchJson(`/api/categories/${id}`, { method: "DELETE" });
    await refreshAdminData();
  };

  const addSubcategory = async (form) => {
    await fetchJson("/api/subcategories", {
      method: "POST",
      body: JSON.stringify({ category_id: form.category_id, name: form.name.trim() }),
    });
    await refreshAdminData();
  };

  const updateSubcategory = async (id, form) => {
    await fetchJson(`/api/subcategories/${id}`, {
      method: "PUT",
      body: JSON.stringify({ category_id: form.category_id, name: form.name.trim() }),
    });
    await refreshAdminData();
  };

  const deleteSubcategory = async (id) => {
    await fetchJson(`/api/subcategories/${id}`, { method: "DELETE" });
    await refreshAdminData();
  };

  const addMachine = async (machineForm, imageFile) => {
    const formData = new FormData();
    Object.entries(machineForm).forEach(([key, value]) => {
      formData.append(key, value ?? "");
    });
    if (imageFile) {
      formData.append("image", imageFile);
    }

    const result = await fetchJson("/api/machines", {
      method: "POST",
      body: formData
    });
    setMachines((prev) => [result, ...prev.filter((machine) => machine.machine_id !== result.machine_id)]);
    await refreshAdminData();
  };

  const updateMachine = async (machineId, machineForm, imageFile) => {
    const formData = new FormData();
    formData.append("_method", "PUT");
    Object.entries(machineForm).forEach(([key, value]) => {
      if (key !== "id") formData.append(key, value ?? "");
    });
    if (imageFile) {
      formData.append("image", imageFile);
    }

    await fetchJson(`/api/machines/${machineId}`, {
      method: "POST",
      body: formData
    });
    await refreshAdminData();
  };

  const deleteMachine = async (machineId) => {
    try {
      await fetchJson(`/api/machines/${machineId}`, {
        method: "DELETE"
      });
    } catch (error) {
      console.error("Unable to delete machine:", error);
    }
    setMachines((prev) => prev.filter((machine) => machine.machine_id !== machineId));
    await refreshAdminData();
  };

  const handleAdminLogin = async (adminId, password) => {
    if (adminId.trim() !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return false;
    }

    localStorage.setItem("salvin_auth_token", ADMIN_TOKEN);
    setIsAdminAuthenticated(true);
    window.setTimeout(() => refreshAdminData(), 0);
    return true;
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("salvin_auth_token");
    localStorage.removeItem("is_admin_authenticated");
    setIsAdminAuthenticated(false);
  };

  const isIntroVisible = showIntro && !isAdminRoute;

  return (
    <>
      <div className={`app${isIntroVisible ? " app-intro-active" : ""}`}>
        <Header isAdminAuthenticated={isAdminAuthenticated} onAdminLogout={handleAdminLogout} />
        {/* Public paths: also list in scripts/generate-sitemap.mjs (sitemap + SEO) */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/food-consultant" element={<ServicesPage />} />
          <Route path="/services" element={<Navigate to="/food-consultant" replace />} />
          <Route path="/industrial-consultancy-services" element={<IndustrialConsultancyPage />} />
          <Route path="/plant-design-engineering-services" element={<PlantDesignEngineeringPage />} />
          <Route path="/turnkey-project-execution-services" element={<TurnkeyExecutionPage />} />
          <Route path="/machinery-equipment-solutions" element={<MachineryEquipmentPage />} />
          <Route path="/processing-packaging-solutions" element={<ProcessingPackagingPage />} />
          <Route path="/supply-chain-procurement-services" element={<SupplyChainProcurementPage />} />
          <Route path="/production-process-optimization" element={<ProductionOptimizationPage />} />
          <Route path="/contract-manufacturing-packaging" element={<ContractManufacturingPage />} />
          <Route path="/services/:serviceSlug" element={<CoreServiceDetailPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogPostPage />} />
          <Route path="/blog" element={<Navigate to="/blogs" replace />} />
          <Route path="/turnkey" element={<TurnkeyPage />} />
          <Route path="/turnkey-project" element={<TurnkeyProjectPage />} />
          <Route path="/turnkey-project/red-chilli-processing-plant" element={<RedChilliDetailPage />} />
          <Route path="/turnkey-project/pizza-sauce-processing-plant" element={<PizzaSauceProcessingDetailPage />} />
          <Route path="/turnkey-project/tomato-ketchup-manufacturing-plant" element={<TomatoKetchupManufacturingDetailPage />} />
          <Route path="/turnkey-project/coffee-processing-plant" element={<CoffeeProcessingDetailPage />} />
          <Route path="/turnkey-project/green-tea-processing-plant" element={<GreenTeaProcessingDetailPage />} />
          <Route path="/turnkey-project/potato-powder-dehydration-plant" element={<PotatoPowderDehydrationDetailPage />} />
          <Route path="/turnkey-project/industrial-flour-milling-plant" element={<IndustrialFlourMillingDetailPage />} />
          <Route path="/turnkey-project/peanut-oil-mill-plant" element={<PeanutOilMillDetailPage />} />
          <Route path="/turnkey-project/edible-oil-processing-plant" element={<EdibleOilProcessingDetailPage />} />
          <Route path="/turnkey-project/wheat-flour-processing-plant" element={<WheatFlourProcessingDetailPage />} />
          <Route path="/turnkey-project/coriander-powder-plant" element={<CorianderPowderDetailPage />} />
          <Route path="/turnkey-project/pasta-noodles-production-plant" element={<PastaNoodlesDetailPage />} />
          <Route path="/turnkey-project/peanut-butter-processing-plant" element={<PeanutButterDetailPage />} />
          <Route path="/turnkey-project/jackfruit-canning-retort-line" element={<JackfruitDetailPage />} />
          <Route path="/turnkey-project/ginger-garlic-paste-plant" element={<GingerGarlicPasteDetailPage />} />
          <Route path="/turnkey-project/black-pepper-powder-line-plant" element={<BlackPepperDetailPage />} />
          <Route path="/turnkey-project/seed-cleaning-sorting-line-plant" element={<SeedCleaningSortingDetailPage />} />
          <Route path="/turnkey-project/cocoa-powder-processing-system-plant" element={<CocoaPowderProcessingDetailPage />} />
          <Route path="/turnkey-project/liquid-glucose-manufacturing-plant" element={<LiquidGlucoseDetailPage />} />
          <Route path="/turnkey-project/protein-bar-manufacturing-plant" element={<ProteinBarManufacturingDetailPage />} />
          <Route path="/turnkey-project/mayonnaise-processing-plant" element={<MayonnaiseProcessingDetailPage />} />
          <Route path="/turnkey-project/instant-mix-frozen-food-processing-plant" element={<InstantMixFrozenFoodDetailPage />} />
          <Route path="/turnkey-project/instant-noodles-processing-plant" element={<InstantNoodlesDetailPage />} />
          <Route path="/turnkey-project/chikki-plucking-plant" element={<ChikkiPluckingDetailPage />} />
          <Route path="/turnkey-project/dry-fruit-chikki-plant" element={<DryFruitChikkiDetailPage />} />
          <Route path="/turnkey-project/mamra-pauva-plant" element={<MamraPauvaDetailPage />} />
          <Route path="/turnkey-project/tomato-puree-plant" element={<TomatoPureeDetailPage />} />
          <Route path="/turnkey-project/tomato-paste-plant" element={<TomatoPasteDetailPage />} />
          <Route path="/turnkey-project/mango-pulp-plant" element={<MangoPulpDetailPage />} />
          <Route path="/turnkey-project/guava-pulp-plant" element={<GuavaPulpDetailPage />} />
          <Route path="/turnkey-project/fully-automated-fruit-juice-processing-plant" element={<FullyAutomatedFruitJuiceProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-jelly-manufacturing-plant" element={<FullyAutomaticJellyManufacturingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-dehydrated-garlic-processing-plant" element={<FullyAutomaticDehydratedGarlicPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-vegetable-drying-plant" element={<FullyAutomaticVegetableDryingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-garam-masala-processing-plant" element={<FullyAutomatedGaramMasalaProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-mixed-spice-plant" element={<FullyAutomaticMixedSpicePlantDetailPage />} />

          <Route path="/turnkey-project/fully-automatic-spice-packaging-line" element={<FullyAutomaticSpicePackagingLineDetailPage />} />
          <Route path="/turnkey-project/spice-blending-plant" element={<SpiceBlendingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-curry-powder-processing-plant" element={<FullyAutomatedCurryPowderProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-frozen-vegetable-processing-plant" element={<FullyAutomatedFrozenVegetableProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/petroleum-jelly-processing" element={<PetroleumJellyProcessingDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-yogurt" element={<FullyAutomaticYogurtPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-uht-milk" element={<FullyAutomaticUHTMilkPlantDetailPage />} />
          <Route path="/turnkey-project/curd" element={<CurdPlantDetailPage />} />

          <Route path="/turnkey-project/fully-automatic-pasteurized-milk-plant" element={<FullyAutomaticPasteurizedMilkPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-buttermilk-processing-plant" element={<ButtermilkProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-paneer-processing-plant" element={<PaneerProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-cheese-plant" element={<CheesePlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-ghee-plant" element={<GheePlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-butter-processing-plant" element={<ButterProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-ice-cream-processing-plant" element={<IceCreamProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-flavored-milk-plant" element={<FlavoredMilkPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-cream-processing-plant" element={<CreamProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-carbonated-soft-drink-plant" element={<CarbonatedSoftDrinkPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-energy-drink-processing-plant" element={<EnergyDrinkProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/health-drink-plant" element={<HealthDrinkPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-syrup-manufacturing-plant" element={<SyrupManufacturingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-rts-beverage-plant" element={<RTSBeveragePlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-mineral-water-plant" element={<MineralWaterPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-packaged-drinking-water-plant" element={<PackagedDrinkingWaterPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-coconut-water-processing-plant" element={<CoconutWaterProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-aloe-vera-juice-processing-plant" element={<AloeVeraJuiceProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-biscuit-plant" element={<BiscuitPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-cookie-plant" element={<CookiePlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-bread-plant" element={<BreadPlantDetailPage />} />
          <Route path="/turnkey-project/cake-plant" element={<CakePlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-wafer-plant" element={<WaferPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-chocolate-processing-plant" element={<ChocolateProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-toffee-plant" element={<ToffeePlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-namkeen-plant" element={<FullyAutomatedNamkeenPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automatic-extruded-snacks-plant" element={<FullyAutomaticExtrudedSnacksPlantDetailPage />} />
          <Route path="/turnkey-project/corn-puff-plant" element={<CornPuffPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-popcorn-processing-plant" element={<FullyAutomatedPopcornProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-rice-processing-plant" element={<FullyAutomatedRiceProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-atta-plant" element={<FullyAutomatedAttaPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-besan-processing-plant" element={<FullyAutomatedBesanProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/fully-automated-corn-flour-plant" element={<FullyAutomatedCornFlourPlantDetailPage />} />
          <Route path="/turnkey-project/oat-processing-plant" element={<OatProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/jaggery-processing-plant" element={<JaggeryProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/sugar-syrup-plant" element={<SugarSyrupPlantDetailPage />} />
          <Route path="/turnkey-project/baby-food-plant" element={<BabyFoodPlantDetailPage />} />
          <Route path="/turnkey-project/malted-food-plant" element={<MaltedFoodPlantDetailPage />} />
          <Route path="/turnkey-project/cocoa-powder-processing-plant" element={<CocoaPowderPlantDetailPage />} />
          <Route path="/turnkey-project/protein-bar-manufacturing-plant" element={<ProteinBarPlantDetailPage />} />
          <Route path="/turnkey-project/millet-processing-plant" element={<MilletProcessingPlantDetailPage />} />
          <Route path="/turnkey-project/bottle-filling-line" element={<BottleFillingLineDetailPage />} />
          <Route path="/turnkey-project/panipuri-processing-line" element={<PanipuriProcessingLineDetailPage />} />
          <Route path="/turnkey-project/chapati-processing-line" element={<ChapatiProcessingLineDetailPage />} />
          <Route path="/turnkey-project/face-wash-manufacturing-plant" element={<FaceWashManufacturingPlantDetailPage />} />
          <Route path="/turnkey-project/shampoo-manufacturing-plant" element={<ShampooManufacturingPlantDetailPage />} />
          <Route path="/turnkey-project/hair-oil-manufacturing-plant" element={<HairOilManufacturingPlantDetailPage />} />
          <Route path="/turnkey-project/body-lotion-manufacturing-plant" element={<BodyLotionManufacturingPlantDetailPage />} />
          <Route path="/turnkey-project/hand-wash-manufacturing-plant" element={<HandWashManufacturingPlantDetailPage />} />
          <Route path="/turnkey-project/surface-cleaner-manufacturing-plant" element={<SurfaceCleanerManufacturingPlantDetailPage />} />
          <Route path="/turnkey-project/detergent-powder-manufacturing-plant" element={<DetergentPowderManufacturingPlantDetailPage />} />
          <Route path="/turnkey-project/body-wash-manufacturing-plant" element={<BodyWashManufacturingPlantDetailPage />} />
          <Route path="/turnkey-project/mouthwash-manufacturing-plant" element={<MouthwashManufacturingPlantDetailPage />} />
          <Route path="/turnkey-project/liquid-soap-manufacturing-plant" element={<LiquidSoapManufacturingPlantDetailPage />} />
          <Route path="/turnkey-project/hand-sanitizer-manufacturing-plant" element={<HandSanitizerManufacturingPlantDetailPage />} />
          <Route path="/turnkey-project/face-cream-manufacturing-plant" element={<FaceCreamManufacturingDetailPage />} />
          <Route path="/turnkey-project/moisturizing-cream-manufacturing-plant" element={<MoisturizingCreamManufacturingDetailPage />} />
          <Route path="/turnkey-project/sunscreen-lotion-manufacturing-plant" element={<SunscreenLotionManufacturingDetailPage />} />
          <Route path="/turnkey-project/hair-conditioner-manufacturing-plant" element={<HairConditionerManufacturingDetailPage />} />
          <Route path="/turnkey-project/hair-serum-manufacturing-plant" element={<HairSerumManufacturingDetailPage />} />
          <Route path="/turnkey-project/baby-lotion-manufacturing-plant" element={<BabyLotionManufacturingDetailPage />} />
          <Route path="/turnkey-project/baby-shampoo-manufacturing-plant" element={<BabyShampooManufacturingDetailPage />} />
          <Route path="/turnkey-project/body-butter-manufacturing-plant" element={<BodyButterManufacturingDetailPage />} />
          <Route path="/turnkey-project/facial-serum-manufacturing-plant" element={<FacialSerumManufacturingDetailPage />} />

          <Route path="/turnkey-project/:projectSlug" element={<TurnkeyDetailPage />} />
          <Route path="/machineries" element={<MachineriesPage machines={machines} categories={categories} subcategories={subcategories} sessionCache={sessionImageCache} loadError={machineLoadError} />} />
          <Route path="/machineries/:machineSlug" element={<MachineDetailPage machines={machines} sessionCache={sessionImageCache} />} />
          <Route
            path="/admin-login"
            element={<AdminLoginPage onAdminLogin={handleAdminLogin} isAdminAuthenticated={isAdminAuthenticated} />}
          />
          <Route path="/admin" element={<Navigate to="/admin-login" replace />} />
          <Route
            path="/admin-panel"
            element={
              <ProtectedAdminRoute isAdminAuthenticated={isAdminAuthenticated}>
                <AdminPage
                  dashboard={dashboard}
                  chatbotAnalytics={chatbotAnalytics}
                  categories={categories}
                  subcategories={subcategories}
                  onAddCategory={addCategory}
                  onUpdateCategory={updateCategory}
                  onDeleteCategory={deleteCategory}
                  onAddSubcategory={addSubcategory}
                  onUpdateSubcategory={updateSubcategory}
                  onDeleteSubcategory={deleteSubcategory}
                  onAddMachine={addMachine}
                  onUpdateMachine={updateMachine}
                  machines={machines}
                  onDeleteMachine={deleteMachine}
                />
              </ProtectedAdminRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
      <FloatingContact />
    </>
  );
}
