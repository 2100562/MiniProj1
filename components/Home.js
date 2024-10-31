const Home = {
    template: `
      <section>
        <h2>Welcome!</h2>
        <p>{{ welcomeMessage }}</p>
      </section>
    `,
    data() {
        return {
            welcomeMessage: "Welcome to my personal page, here you'll find my work experience as well as skills and how to contact me."
        };
    }
};
