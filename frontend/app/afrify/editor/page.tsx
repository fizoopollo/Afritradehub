"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Save,
  Eye,
  Settings,
  Palette,
  Component,
  Grid3x3,
  Plus,
  X,
  Smartphone,
  Monitor,
  ArrowLeft,
} from "lucide-react";

function EditorContent() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template");
  
  const [storeName, setStoreName] = useState("My Store");
  const [currentView, setCurrentView] = useState<"desktop" | "mobile">("desktop");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [storeColor, setStoreColor] = useState("#FF6B35");

  useEffect(() => {
    // Load saved store data from localStorage
    const saved = localStorage.getItem("afrify_store");
    if (saved) {
      const store = JSON.parse(saved);
      setStoreName(store.name || "My Store");
      setStoreColor(store.color || "#FF6B35");
    }
  }, []);

  const handleSave = () => {
    const storeData = {
      template: templateId,
      name: storeName,
      color: storeColor,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem("afrify_store", JSON.stringify(storeData));
    alert("Store saved successfully!");
  };

  const handlePublish = () => {
    alert("Publishing store... Coming soon!");
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar - Tools */}
      <div className="w-64 border-r border-border bg-card overflow-auto">
        <div className="p-6 border-b border-border">
          <Link href="/afrify/builder" className="inline-flex items-center gap-2 text-xs font-medium text-foreground hover:text-secondary transition-colors mb-4 px-2 py-1 rounded hover:bg-muted">
            <ArrowLeft className="h-3 w-3" />
            Back
          </Link>
          <h2 className="font-black text-lg mb-4">Store Builder</h2>
          <Input
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            placeholder="Store Name"
            className="mb-4"
          />
          <div className="flex gap-2">
            <Button onClick={handleSave} size="sm" variant="default" className="flex-1">
              <Save className="h-4 w-4 mr-1" /> Save
            </Button>
            <Button onClick={handlePublish} size="sm" variant="outline" className="flex-1">
              Publish
            </Button>
          </div>
        </div>

        {/* Sections */}
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Customize</h3>
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-muted border border-border"
            >
              <Palette className="h-4 w-4" />
              <span className="text-sm">Colors & Theme</span>
            </button>
            {showColorPicker && (
              <div className="p-3 bg-muted rounded-lg">
                <label className="block text-xs font-semibold mb-2">Primary Color</label>
                <div className="flex gap-2 flex-wrap">
                  {["#FF6B35", "#FF006E", "#8338EC", "#3A86FF", "#06FFA5", "#FFB703"].map((color) => (
                    <button
                      key={color}
                      onClick={() => setStoreColor(color)}
                      className={`h-8 w-8 rounded-full border-2 ${
                        storeColor === color ? "border-foreground" : "border-border"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}
            <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-muted border border-border">
              <Settings className="h-4 w-4" />
              <span className="text-sm">Store Settings</span>
            </button>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Add Sections</h3>
            <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-muted border border-border text-sm">
              <Plus className="h-4 w-4" />
              Hero Banner
            </button>
            <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-muted border border-border text-sm">
              <Plus className="h-4 w-4" />
              Product Grid
            </button>
            <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-muted border border-border text-sm">
              <Plus className="h-4 w-4" />
              Features
            </button>
            <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-muted border border-border text-sm">
              <Plus className="h-4 w-4" />
              Testimonials
            </button>
            <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-muted border border-border text-sm">
              <Plus className="h-4 w-4" />
              Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Toolbar */}
        <div className="border-b border-border bg-card px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold">{storeName}</h1>
            <div className="flex gap-2 bg-muted rounded-lg p-1">
              <button
                onClick={() => setCurrentView("desktop")}
                className={`p-2 rounded transition-colors ${
                  currentView === "desktop"
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <Monitor className="h-4 w-4" />
              </button>
              <button
                onClick={() => setCurrentView("mobile")}
                className={`p-2 rounded transition-colors ${
                  currentView === "mobile"
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <Smartphone className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-1" /> Preview
            </Button>
            <Button size="sm" onClick={handlePublish}>
              Publish Store
            </Button>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 overflow-auto bg-muted/50 p-6 flex items-center justify-center">
          <div
            className={`bg-white rounded-lg shadow-2xl transition-all ${
              currentView === "mobile" ? "w-96 h-full max-h-screen" : "w-full h-auto max-w-5xl"
            }`}
            style={{ borderColor: storeColor }}
          >
            {/* Store Preview */}
            <div className="p-8 h-full flex flex-col">
              {/* Header */}
              <div className="pb-6 border-b border-gray-200 mb-6">
                <h1 className="text-3xl font-black mb-2" style={{ color: storeColor }}>
                  {storeName}
                </h1>
                <p className="text-gray-600 text-sm">Your Online Store</p>
              </div>

              {/* Hero Section */}
              <div
                className="rounded-lg h-40 mb-6 flex items-center justify-center text-white"
                style={{ backgroundColor: storeColor }}
              >
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Welcome to Your Store</h2>
                  <p className="text-sm opacity-90">Drag and drop to customize</p>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="border-2 border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="h-24 bg-gray-100 rounded mb-2 flex items-center justify-center">
                      <Grid3x3 className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="font-semibold text-sm">Product {i}</p>
                    <p className="text-xs text-gray-500">Click to edit</p>
                  </div>
                ))}
              </div>

              {/* Features Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold mb-4">Why Choose Us?</h3>
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <p className="font-semibold" style={{ color: storeColor }}>
                      Fast
                    </p>
                    <p className="text-gray-600 text-xs">Quick checkout</p>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: storeColor }}>
                      Secure
                    </p>
                    <p className="text-gray-600 text-xs">Safe payments</p>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: storeColor }}>
                      Support
                    </p>
                    <p className="text-gray-600 text-xs">24/7 Help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Properties (Optional) */}
      <div className="w-72 border-l border-border bg-card p-6 overflow-auto hidden lg:block">
        <h3 className="font-semibold mb-4">Properties</h3>
        <div className="space-y-4 text-sm">
          <div>
            <label className="block text-xs font-semibold mb-2">Page Title</label>
            <Input value={storeName} onChange={(e) => setStoreName(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-2">Primary Color</label>
            <div
              className="h-8 w-full rounded-lg border-2 cursor-pointer"
              style={{ borderColor: storeColor, backgroundColor: storeColor }}
              onClick={() => setShowColorPicker(!showColorPicker)}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-2">Template</label>
            <p className="text-muted-foreground">Template #{templateId}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EditorPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading editor...</div>}>
      <EditorContent />
    </Suspense>
  );
}
