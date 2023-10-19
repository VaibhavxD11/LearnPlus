import {
  tech1,
  tech2,
  tech3,
  tech4,
  mgmt1,
  mgmt2,
  design1,
  design2,
  person1,
  person2,
  person3,
  person4,
} from "./images";

export const course = {
  info: {
    title: "IIT Bombay",
    students: "208",
    last_Update: "2021/11/09",
    language: "english",
    stars_average: 4.6,
    reviews: "2",
    creator_name: "john doe",
  },
  details: {
    price_old: "100$",
    price_new: "49$",
    price_discount: "51%",
    course_img: tech1,
    features: [
      {
        icon: "fa fa-tv",
        title: "52 hours on-demand video",
      },
      { icon: "fas fa-file", title: "76 articles" },
      {
        icon: "fa fa-download",
        title: "696 downloadable resources",
      },
      { icon: "fas fa-infinity", title: "Full lifetime access" },
      { icon: "fa fa-mobile", title: "Access on mobile and TV" },
      { icon: "fas fa-tasks", title: "Assignments" },
      {
        icon: "fa fa-certificate",
        title: "Certificate of completion",
      },
    ],
  },

  rating: {
    stars: [
      { percent: "60%", star: 5 },
      { percent: "20%", star: 4 },
      { percent: "10%", star: 3 },
      { percent: "7%", star: 2 },
      { percent: "3%", star: 1 },
    ],
    stars_average: 4.6,
    reviews: "158",
  },

  chapters: [
    {
      id: 1,
      title: "B.E/B.Tech",
      total_parts: "14",
      total_time: "1hr 3min",
      parts: [
        {
          sub_title: "B.Tech. in Computer Science and Engineering", time: "08:12" },
        {
          sub_title: "B.Tech. in Aerospace Engineering", time: "03:24" },
        {
          sub_title: "B.Tech. in Electrical Engineering", time: "12:21" },
        {
          sub_title: "B.Tech. in Mechanical Engineering", time: "09:33" },
        {
          sub_title: "B.Tech. in Chemical Engineering", time: "10:15" },
      ],
    },
    {
      id: 2,
      title: "M.Sc",
      total_parts: "39",
      total_time: "3hr 16min",
      parts: [
        {sub_title: "M.Sc. in Biotechnology", time: "08:12" },
        {sub_title: "M.Sc. in Mathematics", time: "03:24" },
        {sub_title: "M.Sc. in Applied Statistics and Informatics", time: "12:21" },
        {
          sub_title: "M.Sc. in Physics", time: "09:33" },
        {
          sub_title: "M.Sc. in Chemistry", time: "10:15" },
        {
          sub_title: "M.Sc. in Applied Geology",
          time: "15:12",
        },
      ],
    },
    {
      id: 3,
      title: "M.Tech",
      total_parts: "19",
      total_time: "1hr 15min",
      parts: [
        {
          sub_title: "M.Tech. in Computer Science and Engineering", time: "08:12" },
        {
          sub_title: "M.Tech. in Biomedical Engineering", time: "03:24" },
        {
          sub_title: "M.Tech. in Environmental Science and Engineering", time: "12:21" },
        {
          sub_title: "M.Tech. in Electronic Systems", time: "09:33" },
        {
          sub_title: "M.Tech. in Chemical Engineering", time: "10:15" },
        {
          sub_title: "M.Tech. in Materials Science",
          time: "15:12",
        },
      ],
    },
    {
      id: 4,
      title: "PhD",
      total_parts: "38",
      total_time: "3hr 52min",
      parts: [
        {
          sub_title: "M.Sc. + Ph.D. in Operations Research", time: "08:12" },
        {
          sub_title: "M.A. + Ph.D. in Philosophy", time: "03:24" },
        {
          sub_title: "M.Sc. + Ph.D. in Energy Science and Engineering", time: "12:21" },
        {
          sub_title: "Ph.D. in Design", time: "09:33" },
      ],
    },
    {
      id: 5,
      title: "BSc",
      total_parts: "12",
      total_time: "1hr 34min",
      parts: [
        {
          sub_title: "B.Sc. in Economics", time: "08:12" },
        {
          sub_title: "B.Sc. in Mathematics", time: "03:24" },
        {
          sub_title: "B.Sc. in Chemistry", time: "12:21" },
      ],
    },
  ],

  description: {
    course_desc:
     "Established in 1958, the Indian Institute of Technology Bombay (also known as IIT Bombay or IIT Mumbai) is the first public college to have laid its foundation stone with assistance from UNESCO. In 1961, it was declared as an Institute of National Importance by the Parliament of India. It has also been declared a 'Deemed University' and is autonomous in nature. IIT Bombay ranked 3 and 4 for both the 'Overall' and 'Engineering' categories, respectively, by the NIRF 2023 Rankings. Globally, the Indian Institute of Technology Bombay improved its ranking to 149 in the QS World Rankings 2024 from 172 in the QS World Rankings 2023. IIT Bombay offers degree and dual degree programmes at the UG, PG and doctorate levels. The institute offers 17 departments with more than 60 courses in the stream of Engineering, Technology, Science and Management. ",
    course_info: {
      question: "Who this course is for",
      answer: [
        "Beginner web development students who have no or only little JavaScript experience",
        "Also developers who know the basics about JavaScript and want to deepen their knowledge",
        "Advanced JavaScript developers who want to learn more about the nitty-gritty details and dive into advanced concepts",
        "Everyone interested in learning JavaScript and all about how it works",
      ],
    },
  },
  coments: [
    {
      user: "Anonymous",
      img: person1,
      time: "3 Oct 2023",
      star: "5",

      title: "Really Good Infracture, facilities and placements also.",
      text:
        "Placements: Aprox 88 percent students were placed last year ( 2022-23) the highest package is 56 LPA and average package is 18 Lacs per annum. Most of students got internships in non core companies and IT companies like healthify me. And core companies are drreddy.",
    },
    {
      user: "Anonymous",
      img: person2,
      time: "26 March 2023",
      star: "4",
      title: "Keep learning",
      text:
        "Faculty: All professors are well qualified in their field and helpful. Some professors take help sessions before midsem and end sem exams. The course curriculum is relevant to industrial applications. The semester exams are much harder than student think and almost all students pass in this department.",
    },
    
  ],

  creator: {
    creator_name: "john doe",
    creator_rating: "4.7",
    creator_courses: "12",
    creator_reviews: "1028",
    creator_skill: "web developer",
    creator_img: person2,
    creator_desc:
      "Hello, I am John doe and I am a web developer. I live and work in Los Angeles, CA. I spend most of my day, experimenting with HTML, CSS and Javascript (and it's endless list of frameworks).",
  },
};

export const courses = [
  {
    id: 1,
    title: "IIT Bombay",
    course_img: tech1,
    creator: "john smilga",
    creator_img: person1,
    star: 4.8,
    price: "19",
    category: "web",
  },
  {
    id: 2,
    title: "IIT Delhi",
    course_img: tech2,
    creator: "john smilga",
    creator_img: person2,
    star: 4.6,
    price: "10",
    category: "web",
  },
  {
    id: 3,
    title: "IIT Roorkee",
    course_img: tech3,
    creator: "jessica fleming",
    creator_img: person3,
    star: 4.6,
    price: "21",
    category: "web",
  },
  {
    id: 4,
    title: "IIT Kharagpur",
    course_img: tech4,
    creator: "wes bos",
    creator_img: person4,
    star: 4.5,
    price: "18",
    category: "web",
  },
  {
    id: 5,
    title: "IIM Ahemdabad",
    course_img: mgmt1,
    creator: "dr karen e wells",
    creator_img: person2,
    star: 4.6,
    price: "35",
    category: "health",
  },
  {
    id: 6,
    title: "IIM Bangalore",
    course_img: mgmt2,
    creator: "chris worfolk",
    creator_img: person3,
    star: 4.3,
    price: "15",
    category: "health",
  },
  {
    id: 7,
    title: "NID",
    course_img: design1,
    creator: "laura goellner",
    creator_img: person1,
    star: 4.7,
    price: "105",
    category: "music",
  },
  {
    id: 8,
    title: "NIFT Delhi",
    course_img: design2,
    creator: "devatma saraswat",
    creator_img: person3,
    star: 4.2,
    price: "99",
    category: "music",
  },
];
