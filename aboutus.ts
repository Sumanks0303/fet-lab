class AboutUs {
    private aboutTextElement: HTMLElement | null;

    constructor() {
        this.aboutTextElement = document.getElementById('aboutText');
        if (!this.aboutTextElement) {
            throw new Error('About text element not found in HTML.');
        }
    }

    fetchAboutContent() {
        const aboutContent = this.getAboutContentFromServer();
        this.renderAboutContent(aboutContent);
    }

    private getAboutContentFromServer(): string {
        return 'Welcome to our Agriculture Management System. We aim to revolutionize farming practices.we are dedicated to transforming agriculture through innovative technology and sustainable practices. Our Agriculture Management System (AMS) is designed to empower farmers and agricultural businesses with powerful tools to streamline operations, optimize productivity, and maximize yields.Our MissionOur mission is to revolutionize farming practices by harnessing the power of technology to address the challenges faced by modern agriculture. We strive to:Enhance Efficiency: Implement smart farming techniques to optimize resource utilization and reduce waste.Improve Productivity: Provide data-driven insights and decision support tools to boost crop yields and quality.Promote Sustainability: Advocate for eco-friendly farming practices that minimize environmental impact.Empower Farmers: Equip growers with user-friendly tools and knowledge to make informed decisions and achieve success.Key Features of Our Agriculture Management SystemCrop Management: Monitor and manage crop health, growth stages, and yield predictions.Field Mapping: Create detailed maps of fields, track soil properties, and optimize planting strategies.Weather Integration: Access real-time weather forecasts and historical data for precision farming.Resource Planning: Efficiently manage irrigation, fertilization, and pest control schedules.Harvest Management: Plan and track harvest activities, storage, and distribution.Analytics and Reporting: Generate insightful reports and analytics for informed decision-making.Mobile Accessibility: Access your farm data anytime, anywhere with our mobile app.';
    }

    private renderAboutContent(content: string) {
        if (this.aboutTextElement) {
            this.aboutTextElement.textContent = content;
        }
    }
}


window.onload = () => {
    const aboutUs = new AboutUs();
    aboutUs.fetchAboutContent();
};
