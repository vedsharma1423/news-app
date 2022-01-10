const articleText = `Less than 24 hours ago, singer The Weeknd released his latest album. 
  It already has millions of plays across all music streaming platforms. 
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
  sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

const article2Text = `On December 17th 2021, the most anticipated movie of the year came 
to theaters. Within a week, Spider-Man: No Way Home, became the highest grossing movie since 
the start of the pandemic era in 2020. The main reason it has so much box office success is 
because of the crazy amount of hype that it had and the crazy theories about the multivers, 
one of which were true and destroyed theaters around the world. The movie is in my opinion, 
one of the best movies in the MCU and also one of the best spiderman movies of all time. `;

const article3Text = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
  sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
  sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

const categories = [
  "TV and Movies",
  "Music",
  "Science",
  "Technology",
  "Politics",
  "Sports",
  "Business",
  "Reviews",
];

const articles = [
  {
    id: 1,
    category: "Music",
    title: "New album by The Weeknd is a hit.",
    description: "About the new album that has taken the world by storm.",
    writer: "Joe Byron",
    content: articleText,
  },
  {
    id: 2,
    category: "TV and Movies",
    title: "Spider-Man No Way Home keeps smashing box office records.",
    description: "The latest of the web slinger's adventure is a success.",
    writer: "Ronald Gump",
    content: article2Text,
  },
  {
    id: 3,
    category: "Sports",
    title: "The NFL playoff race is becoming tighter than ever.",
    description:
      "The crazy race in which many teams whose playoff hopes are still alive.",
    writer: "Hom Tolland",
    content: article3Text,
  },
  {
    id: 4,
    category: "Sports",
    title: "The NFL playoff race is becoming tighter than ever.",
    description:
      "The crazy race in which many teams whose playoff hopes are still alive.",
    writer: "Hom Tolland",
    content: article3Text,
  },
  {
    id: 5,
    category: "Sports",
    title: "The NFL playoff race is becoming tighter than ever.",
    description:
      "The crazy race in which many teams whose playoff hopes are still alive.",
    writer: "Hom Tolland",
    content: article3Text,
  },
  {
    id: 6,
    category: "Sports",
    title: "The NFL playoff race is becoming tighter than ever.",
    description:
      "The crazy race in which many teams whose playoff hopes are still alive.",
    writer: "Hom Tolland",
    content: article3Text,
  },
  {
    id: 7,
    category: "Sports",
    title: "The NFL playoff race is becoming tighter than ever.",
    description:
      "The crazy race in which many teams whose playoff hopes are still alive.",
    writer: "Hom Tolland",
    content: article3Text,
  },
];

exports.articles = articles;
exports.categories = categories;
