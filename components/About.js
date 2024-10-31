const About = {
    template: `
      <section>
        <h2>About Me</h2>
        <p>{{ about }}</p>
      </section>
    `,
    data() {
        return {
            about: "I am a software engineer with a passion for real-time, distributed event-based systems."
        };
    }
};
