export const FEATURE_LIST = [
  "Uses Rails, React, Tailwind CSS and Webpacker.",
  "Uses Devise, Honeybadger, Sidekiq, PostgreSQL, ActiveAdmin.",
  "Heroku ready. Push to Heroku and it will work.",
  "Uses slim for cleaner syntax over erb and better performance over haml.",
  "Intercepts all outgoing emails in non production environment using gem mail_interceptor.",
  "Uses SemaphoreCI for continuous testing.",
  "Content compression via Rack::Deflater.",
  "Auto-formats Ruby code with rubocop.",
  "Auto-formats JavaScript and CSS code with prettier.",
  "Performs background job processing 'inline' for heroku env. It means heroku can deliver emails.",
  "Letter opener gem for development.",
];

export const LIST_NOTES_DUMMY_DATA = {
  data: [
    {
      id: 1,
      title: "How to claim the warranty?",
      description:
        "Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting ",
      tagName: "Getting Started",
      createdAt: "2022-09-18 10:11:33",
      profileImgUrl: "https://iili.io/ijeU7f.png",
    },
    {
      id: 2,
      title: "How to claim the warranty?",
      description:
        "Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting ",
      tagName: "Getting Started",
      createdAt: "2022-09-18 09:01:20",
      profileImgUrl: "https://iili.io/ijeU7f.png",
    },
    {
      id: 3,
      title: "How to claim the warranty?",
      description:
        "Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting ",
      tagName: "Getting Started",
      createdAt: "2022-09-18 03:11:13",
      profileImgUrl: "https://iili.io/ijeU7f.png",
    },
  ],
};

export const LIST_CONTACTS_DUMMY_DATA = {
  data: Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Ronald richards ${i + 1}`,
    email: `ronald${i + 1}@gmail.com`,
    role: "Owner",
    imageUrl: "https://i.pravatar.cc/300",
    createdAt: "2022-09-18 03:11:13",
  })),
};
