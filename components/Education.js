const Education = {
    template: `
      <section>
        <h2>Education</h2>
        <div v-for="edu in education" :key="edu.institution" class="job">
          <h3>{{ edu.institution }}</h3>
          <p>{{ edu.name }} ({{ edu.years }})</p>
        </div>
      </section>
    `,
    data() {
        return {
            education: [
                {
                    institution: "Universidade Aberta",
                    name: "Masters's Degree, Computer Science and Web Technology",
                    years: "2024 - Present",
                },
                {
                    institution: "Universidade Aberta",
                    name: "Bachelor's Degree, Computer Science",
                    years: "2021 - 2024",
                },
                {
                    institution: "Escola Técnica e Profissional de Mafra",
                    name: "High School Diploma - IT",
                    years: "2007 - 2010",
                }
            ]
        };
    }
};
