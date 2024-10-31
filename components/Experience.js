const Experience = {
    template: `
      <section>
        <h2>Experience</h2>
        <div v-for="job in experience" :key="job.company" class="job">
          <h3>{{ job.company }}</h3>
          <p>{{ job.position }} ({{ job.years }})</p>
          <ul>
            <li v-for="task in job.tasks" :key="task">{{ task }}</li>
          </ul>
        </div>
      </section>
    `,
    data() {
        return {
            experience: [
                {
                    company: "Vodafone",
                    position: "Software Engineer",
                    years: "2024 - Present",
                    tasks: [
                        "Payments & Charging API development",
                        "Real-Time Fraud Detection design and development"
                    ]
                },
                {
                    company: "Vodafone",
                    position: "Software Engineer",
                    years: "2023 - 2024",
                    tasks: [
                        "Integration APIs Development"
                    ]
                },
                {
                    company: "Vodafone",
                    position: "Network Automation Engineer Tech Lead",
                    years: "2020 - 2023",
                    tasks: [
                        "Junior Developer Training",
                        "KT Sessions",
                        "Architecture evolution"
                    ]
                },
                {
                    company: "Vodafone",
                    position: "Network Automation Engineer",
                    years: "2018 - 2023",
                    tasks: [
                        "European Mobile Network Fault Resolution Automation"
                    ]
                },
                {
                    company: "Vodafone",
                    position: "Network Automation Engineer",
                    years: "2015 - 2018",
                    tasks: [
                        "Ericsson Mobile Network Fault Resolution Automation"
                    ]
                },
                {
                    company: "Vodafone",
                    position: "Network Engineer",
                    years: "2015 - 2018",
                    tasks: [
                        "Mobile Network Fault Resolution",
                        "Mobile Network Configuration",
                        "Mobile Network Software Upgrades"
                    ]
                },
                {
                    company: "Vodafone",
                    position: "Network Engineer",
                    years: "2012 - 2015",
                    tasks: [
                        "Mobile Network Fault Resolution",
                        "Field Support"
                    ]
                },
                {
                    company: "Nokia Networks",
                    position: "Network Engineer",
                    years: "2011 - 2012",
                    tasks: [
                        "Mobile Network Fault Resolution",
                        "Field Support"
                    ]
                },
                {
                    company: "Portugal Telecom",
                    position: "Network Engineer",
                    years: "2010 - 2011",
                    tasks: [
                        "ADSL & GPON Network Configuration",
                        "Field Support"
                    ]
                }
            ]
        };
    }
};
