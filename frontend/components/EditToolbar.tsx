import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Download, Save, GripVertical, ChevronDown, Plus, Trash2, Eye, Settings, Upload } from "lucide-react";

interface EditToolbarProps {
  isOpen: boolean;
  onClose: () => void;
  templateName?: string;
}

interface StoreSetting {
  storeName: string;
  storeDescription: string;
  email: string;
  phone: string;
  logo: string;
  favicon: string;
}

interface HeaderSetting {
  logoText: string;
  showSearch: boolean;
  showCart: boolean;
  navigationItems: string[];
}

interface ThemeSetting {
  id: string;
  name: string;
  expanded: boolean;
}

interface PageSection {
  id: string;
  name: string;
  type: string;
  enabled: boolean;
}

export default function EditToolbar({ isOpen, onClose, templateName }: EditToolbarProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const dragRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<"theme" | "page">("theme");

  // Store Settings
  const [store, setStore] = useState<StoreSetting>({
    storeName: "Your Store Name",
    storeDescription: "Premium quality products for everyone",
    email: "info@store.com",
    phone: "+1 (555) 123-4567",
    logo: "/assets/logo.png",
    favicon: "/assets/favicon.ico",
  });

  // Header Settings
  const [header, setHeader] = useState<HeaderSetting>({
    logoText: "Store",
    showSearch: true,
    showCart: true,
    navigationItems: ["Home", "Shop", "About", "Contact"],
  });

  // Color Settings
  const [colors, setColors] = useState({
    primary: "#000000",
    secondary: "#ffffff",
    accent: "#3b82f6",
    background: "#f9fafb",
    text: "#111827",
  });

  // Typography Settings
  const [typography, setTypography] = useState({
    headingFont: "Inter",
    bodyFont: "Inter",
    headingSize: "32",
    bodySize: "16",
  });

  // Product Settings
  const [products, setProducts] = useState({
    itemsPerRow: "4",
    itemsToShow: "12",
    showRatings: true,
    showPrice: true,
    showImage: true,
  });

  // Footer Settings
  const [footer, setFooter] = useState({
    copyrightText: `© 2024 Your Store. All rights reserved.`,
    showSocial: true,
    links: ["Privacy Policy", "Terms of Service", "Shipping Info", "Returns"],
  });

  const [themeSettings, setThemeSettings] = useState<ThemeSetting[]>([
    { id: "general", name: "General Settings", expanded: true },
    { id: "colors", name: "Colors", expanded: true },
    { id: "typography", name: "Typography", expanded: false },
    { id: "header", name: "Header & Navigation", expanded: false },
    { id: "products", name: "Product Display", expanded: false },
    { id: "footer", name: "Footer", expanded: false },
    { id: "checkout", name: "Checkout & Cart", expanded: false },
    { id: "social", name: "Social Media", expanded: false },
  ]);

  const [pageSections, setPageSections] = useState<PageSection[]>([
    { id: "header", name: "Header", type: "Header Group", enabled: true },
    { id: "hero", name: "Hero Section", type: "Hero with Image", enabled: true },
    { id: "featured", name: "Featured Products", type: "Product Grid", enabled: true },
    { id: "collection", name: "Collections", type: "Collection Grid", enabled: true },
    { id: "promo", name: "Promotion Banner", type: "Banner", enabled: true },
    { id: "about", name: "About Section", type: "Rich Text", enabled: true },
    { id: "newsletter", name: "Newsletter", type: "Email Signup", enabled: true },
    { id: "footer", name: "Footer", type: "Footer Group", enabled: true },
  ]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleThemeSetting = (id: string) => {
    setThemeSettings(
      themeSettings.map((setting) =>
        setting.id === id ? { ...setting, expanded: !setting.expanded } : setting
      )
    );
  };

  const togglePageSection = (id: string) => {
    setPageSections(
      pageSections.map((section) =>
        section.id === id ? { ...section, enabled: !section.enabled } : section
      )
    );
  };

  const removePageSection = (id: string) => {
    setPageSections(pageSections.filter((section) => section.id !== id));
  };

  const handleSave = () => {
    alert("Template settings saved successfully!");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-30"
          />

          {/* Shopify-Style Customizer Panel */}
          <motion.div
            ref={dragRef}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="fixed z-50 w-[540px] h-[90vh] overflow-hidden bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseMove={isDragging ? handleMouseMove : undefined}
            onMouseUp={handleMouseUp}
            onMouseLeave={isDragging ? handleMouseUp : undefined}
          >
            {/* Draggable Header */}
            <div
              className="bg-white border-b border-gray-200 p-4 flex items-center justify-between cursor-grab active:cursor-grabbing hover:bg-gray-50 transition-colors"
              onMouseDown={handleMouseDown}
            >
              <div className="flex items-center gap-3 flex-1">
                <GripVertical size={18} className="text-gray-400" />
                <div>
                  <h2 className="font-bold text-lg">Customize {templateName || "Store"}</h2>
                  <p className="text-xs text-gray-500">Edit all your store settings</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-0 border-b border-gray-200 bg-gray-50 px-4">
              <button
                onClick={() => setActiveSection("theme")}
                className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 ${
                  activeSection === "theme"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <Settings className="inline mr-2" size={16} />
                Theme
              </button>
              <button
                onClick={() => setActiveSection("page")}
                className={`px-6 py-3 font-medium text-sm transition-colors border-b-2 ${
                  activeSection === "page"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <Eye className="inline mr-2" size={16} />
                Sections
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto">
              {activeSection === "theme" && (
                <div className="p-4 space-y-3">
                  {themeSettings.map((setting) => (
                    <div key={setting.id} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleThemeSetting(setting.id)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900">{setting.name}</span>
                        <ChevronDown
                          size={18}
                          className={`text-gray-500 transition-transform ${
                            setting.expanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {setting.expanded && (
                        <div className="border-t border-gray-200 p-4 bg-gray-50 space-y-3">
                          {/* General Settings */}
                          {setting.id === "general" && (
                            <>
                              <div>
                                <label className="block text-xs font-semibold mb-1">Store Name</label>
                                <input
                                  type="text"
                                  value={store.storeName}
                                  onChange={(e) => setStore({ ...store, storeName: e.target.value })}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-semibold mb-1">Store Description</label>
                                <textarea
                                  value={store.storeDescription}
                                  onChange={(e) => setStore({ ...store, storeDescription: e.target.value })}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none"
                                  rows={2}
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-semibold mb-1">Email</label>
                                <input
                                  type="email"
                                  value={store.email}
                                  onChange={(e) => setStore({ ...store, email: e.target.value })}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-semibold mb-1">Phone</label>
                                <input
                                  type="tel"
                                  value={store.phone}
                                  onChange={(e) => setStore({ ...store, phone: e.target.value })}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-semibold mb-2">Logo URL</label>
                                <div className="flex gap-2 items-center">
                                  {store.logo && (
                                    <img
                                      src={store.logo}
                                      alt="Logo"
                                      className="w-8 h-8 object-cover rounded"
                                      onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                      }}
                                    />
                                  )}
                                  <input
                                    type="text"
                                    value={store.logo}
                                    onChange={(e) => setStore({ ...store, logo: e.target.value })}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-xs"
                                    placeholder="/assets/logo.png"
                                  />
                                </div>
                              </div>
                            </>
                          )}

                          {/* Colors */}
                          {setting.id === "colors" && (
                            <>
                              {[
                                { key: "primary", label: "Primary Color" },
                                { key: "secondary", label: "Secondary Color" },
                                { key: "accent", label: "Accent Color" },
                                { key: "background", label: "Background Color" },
                                { key: "text", label: "Text Color" },
                              ].map(({ key, label }) => (
                                <div key={key}>
                                  <label className="block text-xs font-semibold mb-1">{label}</label>
                                  <div className="flex gap-2 items-center">
                                    <input
                                      type="color"
                                      value={(colors as any)[key]}
                                      onChange={(e) =>
                                        setColors({ ...colors, [key]: e.target.value })
                                      }
                                      className="w-12 h-10 rounded-lg cursor-pointer border-2 border-gray-300"
                                    />
                                    <input
                                      type="text"
                                      value={(colors as any)[key]}
                                      onChange={(e) =>
                                        setColors({ ...colors, [key]: e.target.value })
                                      }
                                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-xs"
                                    />
                                  </div>
                                </div>
                              ))}
                            </>
                          )}

                          {/* Typography */}
                          {setting.id === "typography" && (
                            <>
                              <div>
                                <label className="block text-xs font-semibold mb-1">Heading Font</label>
                                <select
                                  value={typography.headingFont}
                                  onChange={(e) =>
                                    setTypography({ ...typography, headingFont: e.target.value })
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                >
                                  <option>Inter</option>
                                  <option>Playfair Display</option>
                                  <option>Poppins</option>
                                  <option>Roboto</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-xs font-semibold mb-1">Body Font</label>
                                <select
                                  value={typography.bodyFont}
                                  onChange={(e) =>
                                    setTypography({ ...typography, bodyFont: e.target.value })
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                >
                                  <option>Inter</option>
                                  <option>Open Sans</option>
                                  <option>Lato</option>
                                  <option>Roboto</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-xs font-semibold mb-1">
                                  Heading Size (px)
                                </label>
                                <input
                                  type="number"
                                  value={typography.headingSize}
                                  onChange={(e) =>
                                    setTypography({ ...typography, headingSize: e.target.value })
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-semibold mb-1">Body Size (px)</label>
                                <input
                                  type="number"
                                  value={typography.bodySize}
                                  onChange={(e) =>
                                    setTypography({ ...typography, bodySize: e.target.value })
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                              </div>
                            </>
                          )}

                          {/* Header */}
                          {setting.id === "header" && (
                            <>
                              <div>
                                <label className="block text-xs font-semibold mb-1">Logo Text</label>
                                <input
                                  type="text"
                                  value={header.logoText}
                                  onChange={(e) => setHeader({ ...header, logoText: e.target.value })}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    checked={header.showSearch}
                                    onChange={(e) =>
                                      setHeader({ ...header, showSearch: e.target.checked })
                                    }
                                    className="w-4 h-4 rounded"
                                  />
                                  <span className="text-sm font-medium">Show Search Bar</span>
                                </label>
                                <label className="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    checked={header.showCart}
                                    onChange={(e) =>
                                      setHeader({ ...header, showCart: e.target.checked })
                                    }
                                    className="w-4 h-4 rounded"
                                  />
                                  <span className="text-sm font-medium">Show Cart Icon</span>
                                </label>
                              </div>
                              <div>
                                <label className="block text-xs font-semibold mb-2">Navigation Items</label>
                                <div className="space-y-1 max-h-24 overflow-y-auto">
                                  {header.navigationItems.map((item, idx) => (
                                    <div key={idx} className="flex gap-2">
                                      <input
                                        type="text"
                                        value={item}
                                        onChange={(e) => {
                                          const newItems = [...header.navigationItems];
                                          newItems[idx] = e.target.value;
                                          setHeader({ ...header, navigationItems: newItems });
                                        }}
                                        className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}

                          {/* Products */}
                          {setting.id === "products" && (
                            <>
                              <div>
                                <label className="block text-xs font-semibold mb-1">Items Per Row</label>
                                <select
                                  value={products.itemsPerRow}
                                  onChange={(e) =>
                                    setProducts({ ...products, itemsPerRow: e.target.value })
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                >
                                  <option value="2">2 Columns</option>
                                  <option value="3">3 Columns</option>
                                  <option value="4">4 Columns</option>
                                  <option value="5">5 Columns</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-xs font-semibold mb-1">Items To Show</label>
                                <input
                                  type="number"
                                  value={products.itemsToShow}
                                  onChange={(e) =>
                                    setProducts({ ...products, itemsToShow: e.target.value })
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    checked={products.showImage}
                                    onChange={(e) =>
                                      setProducts({ ...products, showImage: e.target.checked })
                                    }
                                    className="w-4 h-4 rounded"
                                  />
                                  <span className="text-sm font-medium">Show Product Images</span>
                                </label>
                                <label className="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    checked={products.showPrice}
                                    onChange={(e) =>
                                      setProducts({ ...products, showPrice: e.target.checked })
                                    }
                                    className="w-4 h-4 rounded"
                                  />
                                  <span className="text-sm font-medium">Show Prices</span>
                                </label>
                                <label className="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    checked={products.showRatings}
                                    onChange={(e) =>
                                      setProducts({ ...products, showRatings: e.target.checked })
                                    }
                                    className="w-4 h-4 rounded"
                                  />
                                  <span className="text-sm font-medium">Show Ratings</span>
                                </label>
                              </div>
                            </>
                          )}

                          {/* Footer */}
                          {setting.id === "footer" && (
                            <>
                              <div>
                                <label className="block text-xs font-semibold mb-1">Copyright Text</label>
                                <input
                                  type="text"
                                  value={footer.copyrightText}
                                  onChange={(e) =>
                                    setFooter({ ...footer, copyrightText: e.target.value })
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-semibold mb-1">Footer Links</label>
                                <div className="space-y-1 max-h-24 overflow-y-auto">
                                  {footer.links.map((link, idx) => (
                                    <input
                                      key={idx}
                                      type="text"
                                      value={link}
                                      onChange={(e) => {
                                        const newLinks = [...footer.links];
                                        newLinks[idx] = e.target.value;
                                        setFooter({ ...footer, links: newLinks });
                                      }}
                                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                                    />
                                  ))}
                                </div>
                              </div>
                              <label className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  checked={footer.showSocial}
                                  onChange={(e) =>
                                    setFooter({ ...footer, showSocial: e.target.checked })
                                  }
                                  className="w-4 h-4 rounded"
                                />
                                <span className="text-sm font-medium">Show Social Media Links</span>
                              </label>
                            </>
                          )}

                          {/* Other sections placeholder */}
                          {!["general", "colors", "typography", "header", "products", "footer"].includes(
                            setting.id
                          ) && (
                            <p className="text-xs text-gray-500">
                              {setting.name} settings coming soon
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeSection === "page" && (
                <div className="p-4 space-y-3">
                  <div className="mb-4 bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <p className="text-xs text-blue-900 font-medium">
                      Enable/disable page sections or remove them
                    </p>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-blue-300 text-blue-600 font-medium py-2 px-3 rounded-lg text-sm hover:bg-blue-50 transition-colors">
                    <Plus size={16} />
                    Add Section
                  </button>

                  <div className="space-y-2">
                    {pageSections.map((section) => (
                      <div
                        key={section.id}
                        className={`flex items-center justify-between p-3 border rounded-lg transition-colors ${
                          section.enabled
                            ? "bg-white border-gray-200 hover:bg-gray-50"
                            : "bg-gray-50 border-gray-200 opacity-60"
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <input
                            type="checkbox"
                            checked={section.enabled}
                            onChange={() => togglePageSection(section.id)}
                            className="w-4 h-4 cursor-pointer"
                          />
                          <div className="text-left">
                            <p className="text-sm font-medium text-gray-900">{section.name}</p>
                            <p className="text-xs text-gray-500">{section.type}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removePageSection(section.id)}
                          className="p-1.5 hover:bg-red-100 text-gray-400 hover:text-red-600 rounded transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="border-t border-gray-200 bg-gray-50 p-4 space-y-3">
              <button
                onClick={handleSave}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-sm transition-colors"
              >
                <Save size={18} />
                Save All Changes
              </button>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-3 rounded-lg text-sm transition-colors">
                  <Copy size={16} />
                  Duplicate
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-3 rounded-lg text-sm transition-colors">
                  <Download size={16} />
                  Export
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
