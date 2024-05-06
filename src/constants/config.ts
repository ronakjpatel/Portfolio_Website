type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    academic_experience: TSection;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    tech: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "Ronak Patel",
    fullName: "Ronak Patel",
    email: "rjpatel7991@gmail.com",
  },
  hero: {
    name: "Ronak Patel",
    p: ["I Craft Effective Solutions to Today's Technological Challenges"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a proficient software developer well-versed in various 
      programming languages and frameworks. With a strong ability to adapt and
      learn quickly, I excel in crafting effective and user-centric solutions.
      Let's collaborate to transform your concepts into reality!`,
    },
    academic_experience: {
      p: "What I have studied so far",
      h2: "Academics Experience.",
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
    tech: {
      p: "What I have learnt so far",
      h2: "Skills.",
    },
  },
};
