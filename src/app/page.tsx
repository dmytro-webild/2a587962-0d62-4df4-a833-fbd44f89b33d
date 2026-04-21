"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Activity, Award, Flame, Heart, TrendingUp, UserCheck, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="large"
        background="none"
        cardStyle="solid"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="XPLODE"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="XPLODE FITNESS HUB"
      description="Transform your body, ignite your potential. Join the most high-energy fitness hub in the city. Limited seats available!"
      buttons={[
        {
          text: "Join Now",
          href: "#pricing",
        },
        {
          text: "Book Trainer",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/glowing-water-bottle-with-neon-triangles_23-2152017169.jpg"
      imageAlt="gym equipment neon lights"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Story"
      title="Built for Results, Defined by You"
      description="At XPLODE FITNESS HUB, we believe fitness is a discipline. We provide a space where your goals become our priority. From beginner programs to advanced bodybuilding, our modern facility is crafted to push your limits."
      subdescription="Our expert trainers and premium equipment ensure you have everything needed to succeed."
      icon={Award}
      imageSrc="http://img.b2bpic.net/free-photo/man-conversing-with-woman-gym-while-wearing-medical-mask_23-2148766015.jpg"
      mediaAnimation="slide-up"
      imageAlt="intense workout person fitness"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: Activity,
          title: "Gym Membership",
          description: "Access to our premium equipment and modern facility.",
        },
        {
          icon: UserCheck,
          title: "Personal Training",
          description: "1-on-1 coaching for personalized growth.",
        },
        {
          icon: Flame,
          title: "Weight Loss",
          description: "Specialized programs for effective fat burning.",
        },
        {
          icon: TrendingUp,
          title: "Muscle Gain",
          description: "Advanced body building and strength training.",
        },
        {
          icon: Heart,
          title: "Cardio Training",
          description: "Boost your endurance and cardiovascular health.",
        },
        {
          icon: Zap,
          title: "Slimming Programs",
          description: "Results-driven programs to reach your target physique.",
        },
      ]}
      title="Comprehensive Fitness Services"
      description="We offer a range of programs tailored to your specific goals."
    />
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",
          value: "4.9⭐",
          title: "Rating",
          description: "Based on 50+ happy members.",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-fitness-infographic_23-2149243324.jpg",
          imageAlt: "fitness icons set",
        },
        {
          id: "2",
          value: "Modern",
          title: "Equipment",
          description: "Premium machines and clean space.",
          imageSrc: "http://img.b2bpic.net/free-vector/white-fitness-icons-making-circle_1015-91.jpg",
          imageAlt: "fitness icons set",
        },
        {
          id: "3",
          value: "Expert",
          title: "Trainers",
          description: "Personalized guidance and support.",
          imageSrc: "http://img.b2bpic.net/free-vector/creative-sports-atributes-sports-training-25-glyph-solid-black-icon-pack-such-as-gym-dumbbell-tactic-shot-club_1142-25124.jpg",
          imageAlt: "fitness icons set",
        },
      ]}
      title="Why Choose XPLODE"
      description="Experience premium fitness at the highest standard."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Amit Kumar",
          role: "Pro Member",
          testimonial: "Excellent gym with a great atmosphere and equipment.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-gym_23-2148111693.jpg",
          imageAlt: "happy gym client portrait",
        },
        {
          id: "2",
          name: "Priya Singh",
          role: "Member",
          testimonial: "Very clean, spacious, and well-maintained environment.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-black-copybook-with-business-notes-dark-background_179666-19269.jpg",
          imageAlt: "fit person gym portrait",
        },
        {
          id: "3",
          name: "Rahul Sharma",
          role: "Trainer Client",
          testimonial: "My personal trainer was fantastic. Highly recommend!",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-diversity-sport-woman-training_23-2149174794.jpg",
          imageAlt: "gym member happy portrait",
        },
        {
          id: "4",
          name: "Sneha Reddy",
          role: "Member",
          testimonial: "The best gym in the city for serious transformations.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-fitness-woman-running_171337-9022.jpg",
          imageAlt: "fit athlete smiling portrait",
        },
        {
          id: "5",
          name: "Vikram Das",
          role: "Member",
          testimonial: "Great crowd and top-notch training equipment.",
          imageSrc: "http://img.b2bpic.net/free-photo/mixed-rae-african-american-woman-has-rest-her-workout-breathing-deep-body-parts_633478-2160.jpg",
          imageAlt: "transformation success gym",
        },
      ]}
      title="What Our Members Say"
      description="Real results from our fitness family."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        {
          id: "gym",
          badge: "Standard",
          price: "₹1200",
          subtitle: "/month",
          features: [
            "Gym Membership",
            "Equipment Access",
            "6am-11pm Access",
          ],
          buttons: [
            {
              text: "Start Today",
              href: "#contact",
            },
          ],
        },
        {
          id: "pt",
          badge: "Premium",
          price: "₹2500",
          subtitle: "/month",
          features: [
            "Everything in Gym",
            "1-on-1 Coaching",
            "Diet Planning",
          ],
          buttons: [
            {
              text: "Book PT",
              href: "#contact",
            },
          ],
        },
        {
          id: "admission",
          badge: "Entry",
          price: "₹1000",
          subtitle: "One-time",
          features: [
            "Registration Fee",
            "Access to facility",
            "Welcome kit",
          ],
          buttons: [
            {
              text: "Register",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Simple & Transparent Pricing"
      description="Start your journey at XPLODE today."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Cardio Zone",
          price: "Modern",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-gym-fitnes_624325-2383.jpg",
          imageAlt: "gym weights row",
        },
        {
          id: "2",
          name: "Weights Area",
          price: "Premium",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-equipment-modern-gym-close-up-view-suspension-straps-sport-fitness-health_613910-20264.jpg",
          imageAlt: "dumbbells rack gym",
        },
        {
          id: "3",
          name: "Locker Room",
          price: "Clean",
          imageSrc: "http://img.b2bpic.net/free-photo/office-lifestyle-sport-room-gym-nature_1339-3189.jpg",
          imageAlt: "gym equipment setup",
        },
        {
          id: "4",
          name: "Yoga Space",
          price: "Quiet",
          imageSrc: "http://img.b2bpic.net/free-photo/silhouette-woman-gym_23-2148024301.jpg",
          imageAlt: "workout bench interior",
        },
        {
          id: "5",
          name: "Training Zone",
          price: "Intense",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-people-training-together-gym_23-2150290027.jpg",
          imageAlt: "gym machines area",
        },
        {
          id: "6",
          name: "Reception",
          price: "Friendly",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-view-gym_1048-9960.jpg",
          imageAlt: "weightlifting zone gym",
        },
      ]}
      title="Facility Gallery"
      description="Take a tour of our modern fitness center."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "canvas-reveal",
      }}
      text="Visit us at XPLODE FITNESS HUB. Open Mon-Sat 6:00 AM – 11:00 PM. Start your journey today!"
      buttons={[
        {
          text: "WhatsApp Us",
          href: "https://wa.me/yournumber",
        },
        {
          text: "Visit Today",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="XPLODE FITNESS HUB"
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
