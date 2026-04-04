import EtchTemplate from '@/lib/templates/art/EtchTemplate';
import BrutalistTemplate from '@/lib/templates/art/BrutalistTemplate';
import SunsetTemplate from '@/lib/templates/art/SunsetTemplate';
import MonochromeTemplate from '@/lib/templates/art/MonochromeTemplate';
import OceanTemplate from '@/lib/templates/art/OceanTemplate';
import OkinawaTemplate from '@/lib/templates/art/OkinawaTemplate';
import PortfolioTemplate from '@/lib/templates/art/PortfolioTemplate';
import TotemTemplate from '@/lib/templates/art/TotemTemplate';
import WrongTemplate from '@/lib/templates/art/WrongTemplate';
import AnthologistTemplate from '@/lib/templates/art/AnthologistTemplate';
import ClayTemplate from '@/lib/templates/art/ClayTemplate';
import DarkroomTemplate from '@/lib/templates/art/DarkroomTemplate';
import ExhibitTemplate from '@/lib/templates/art/ExhibitTemplate';
import MioTemplate from '@/lib/templates/art/MioTemplate';

import BeYoursTemplate from '@/lib/templates/beauty/BeYoursTemplate';
import WonderTemplate from '@/lib/templates/beauty/WonderTemplate';

import DriveTemplate from '@/lib/templates/auto/DriveTemplate';
import TorqueTemplate from '@/lib/templates/auto/TorqueTemplate';
import FleetTemplate from '@/lib/templates/auto/FleetTemplate';
import GarageTemplate from '@/lib/templates/auto/GarageTemplate';
import MaranelloTemplate from '@/lib/templates/auto/MaranelloTemplate';
import NitroTemplate from '@/lib/templates/auto/NitroTemplate';
import AutoTemplate from '@/lib/templates/auto/AutoTemplate';

import LeatherTemplate from '@/lib/templates/bags/LeatherTemplate';
import CourierTemplate from '@/lib/templates/bags/CourierTemplate';
import GalleriaTemplate from '@/lib/templates/bags/GalleriaTemplate';
import PrestigeTemplate from '@/lib/templates/bags/PrestigeTemplate';
import ToteTemplate from '@/lib/templates/bags/ToteTemplate';
import VoyageTemplate from '@/lib/templates/bags/VoyageTemplate';
import BagsTemplate from '@/lib/templates/bags/BagsTemplate';

import AirconTemplate from '@/lib/templates/services/AirconTemplate';
import EnthusiastTemplate from '@/lib/templates/services/EnthusiastTemplate';
import GeniusTemplate from '@/lib/templates/services/GeniusTemplate';
import GrainTemplate from '@/lib/templates/services/GrainTemplate';
import LeapTemplate from '@/lib/templates/services/LeapTemplate';
import NoteableTemplate from '@/lib/templates/services/NoteableTemplate';
import PanoramaTemplate from '@/lib/templates/services/PanoramaTemplate';
import PrintingTemplate from '@/lib/templates/services/PrintingTemplate';
import ServicesTemplate from '@/lib/templates/services/ServicesTemplate';
import SmileTemplate from '@/lib/templates/services/SmileTemplate';
import SonikTemplate from '@/lib/templates/services/SonikTemplate';
import TattooTemplate from '@/lib/templates/services/TattooTemplate';
import WorkflowTemplate from '@/lib/templates/services/WorkflowTemplate';

import ElectronicsTemplate from '@/lib/templates/electronics/ElectronicsTemplate';
import FashionTemplate from '@/lib/templates/fashion/FashionTemplate';
import FoodTemplate from '@/lib/templates/food/FoodTemplate';
import HandmadeTemplate from '@/lib/templates/handmade/HandmadeTemplate';

export const templateComponentMap: Record<string, any> = {
  // Art
  etch: EtchTemplate,
  brutalist: BrutalistTemplate,
  sunset: SunsetTemplate,
  monochrome: MonochromeTemplate,
  ocean: OceanTemplate,
  okinawa: OkinawaTemplate,
  portfolio: PortfolioTemplate,
  totem: TotemTemplate,
  wrong: WrongTemplate,
  anthologist: AnthologistTemplate,
  clay: ClayTemplate,
  darkroom: DarkroomTemplate,
  exhibit: ExhibitTemplate,
  mio: MioTemplate,

  // Beauty
  beyours: BeYoursTemplate,
  wonder: WonderTemplate,

  // Auto
  drive: DriveTemplate,
  torque: TorqueTemplate,
  fleet: FleetTemplate,
  garage: GarageTemplate,
  maranello: MaranelloTemplate,
  nitro: NitroTemplate,
  auto: AutoTemplate,

  // Bags
  leather: LeatherTemplate,
  courier: CourierTemplate,
  galleria: GalleriaTemplate,
  prestige: PrestigeTemplate,
  tote: ToteTemplate,
  voyage: VoyageTemplate,
  bags: BagsTemplate,

  // Services
  aircon: AirconTemplate,
  enthusiast: EnthusiastTemplate,
  genius: GeniusTemplate,
  grain: GrainTemplate,
  leap: LeapTemplate,
  noteable: NoteableTemplate,
  panorama: PanoramaTemplate,
  printing: PrintingTemplate,
  services: ServicesTemplate,
  smile: SmileTemplate,
  sonik: SonikTemplate,
  tattoo: TattooTemplate,
  workflow: WorkflowTemplate,

  // Other categories
  electronics: ElectronicsTemplate,
  fashion: FashionTemplate,
  food: FoodTemplate,
  handmade: HandmadeTemplate,
};
