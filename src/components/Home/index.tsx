"use client";

import React, { useState } from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import Testimonials from "./Testimonials";
import DynamicModal from "@/components/Common/DynamicModal";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <main>
      <Hero />

      {/* 🔥 Pass open function to Categories */}
      <Categories onCategoryClick={(slug) => setActiveCategory(slug)} />

      <NewArrival />
      <PromoBanner />
      <BestSeller />
      <Testimonials />

      {/* 🔥 Modal Render */}
      {activeCategory && (
        <DynamicModal
          categorySlug={activeCategory}
          onClose={() => setActiveCategory(null)}
        />
      )}
    </main>
  );
};

export default Home;