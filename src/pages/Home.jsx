import React from 'react'
import Hero from '../components/Hero'
import ServicesOverview from '../components/ServicesOverview'
import PortfolioGrid from '../components/PortfolioGrid'
import TechStack from '../components/TechStack'
import BannerPortfolioGrid from '../components/BannerPortfolioGrid'
import WelcomeSection from '../components/WelcomeSection'
import StatsBar from '../components/StatsBar'
import CompanyInfoSection from '../components/CompanyInfoSection'
import Testimonials from '../components/Testimonials'
import EmployeeTestimonials from '../components/EmployeeTestimonials'
import ContactPrompt from '../components/ContactPrompt'

const Home = () => {
    return (
        <>
            <Hero />
            <ServicesOverview />
            <PortfolioGrid />
            <TechStack />
            <BannerPortfolioGrid />
            <WelcomeSection />
            <StatsBar />
            <CompanyInfoSection />
            <Testimonials />
            <EmployeeTestimonials />
            <ContactPrompt />
        </>
    )
}

export default Home
