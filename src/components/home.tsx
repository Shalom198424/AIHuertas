import React from "react";
import HeroSection from "./home/HeroSection";
import FeaturedTips from "./home/FeaturedTips";
import ForumPreview from "./home/ForumPreview";

interface HomePageProps {
  heroTitle?: string;
  heroSubtitle?: string;
  heroCtaText?: string;
  heroBackgroundImage?: string;
  featuredTipsTitle?: string;
  featuredTipsDescription?: string;
  forumTitle?: string;
  forumDescription?: string;
}

const HomePage = ({
  heroTitle,
  heroSubtitle,
  heroCtaText,
  heroBackgroundImage,
  featuredTipsTitle,
  featuredTipsDescription,
  forumTitle,
  forumDescription,
}: HomePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        ctaText={heroCtaText}
        backgroundImage={heroBackgroundImage}
      />

      {/* Featured Tips Section */}
      <FeaturedTips
        title={featuredTipsTitle}
        description={featuredTipsDescription}
      />

      {/* Forum Preview Section */}
      <ForumPreview title={forumTitle} description={forumDescription} />
    </div>
  );
};

export default HomePage;
