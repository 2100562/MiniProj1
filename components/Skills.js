const Skills = {
    template: `
      <section>
        <h2>Skills</h2>
        <ul>
          <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
      </section>
    `,
    data() {
        return {
            skills: ["Java", "Springboot", "Apache Kafka", "Apache Kafka Connect", "Apache Kafka-Streams", "Oracle SQL", "Docker", "AWS"]
        };
    }
};
