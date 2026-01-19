export interface YouTubeVideo {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  durationSeconds: number;
  durationMinutes: number;
  durationTimestamp: string;
  uploadedTime: string;
}

export interface YouTubeLesson {
  bookNumber: number;
  lessonNumber: number;
  videos: YouTubeVideo[];
}

// Book 1 YouTube Videos
const book1YouTubeVideos: YouTubeVideo[] = [
  {
    "title": "Madinah Book 1 | Session 1 - L1 - Demonstrative Pronouns | Abu Kenzah",
    "videoUrl": "https://www.youtube.com/watch?v=LfZi-r_ckkk",
    "thumbnailUrl": "https://i.ytimg.com/vi/LfZi-r_ckkk/maxresdefault.jpg",
    "duration": "34 Minutes, 34 Seconds",
    "durationSeconds": 2074,
    "durationMinutes": 34.57,
    "durationTimestamp": "34:34",
    "uploadedTime": "2022-10-24T19:31:16"
  },
  {
    "title": "Madinah Book 1 | Session 2 - L1&2 - Demonstrative Pronouns | Abu Kenzah",
    "videoUrl": "https://www.youtube.com/watch?v=zddLxbMjXIQ",
    "thumbnailUrl": "https://i.ytimg.com/vi/zddLxbMjXIQ/maxresdefault.jpg",
    "duration": "45 Minutes, 38 Seconds",
    "durationSeconds": 2738,
    "durationMinutes": 45.63,
    "durationTimestamp": "45:38",
    "uploadedTime": "2022-10-31T20:17:52"
  },
  {
    "title": "Madinah Book 1 | Session 3 - L3 - Definite Article | Abu Kenzah",
    "videoUrl": "https://www.youtube.com/watch?v=wjhjps32pcc",
    "thumbnailUrl": "https://i.ytimg.com/vi/wjhjps32pcc/maxresdefault.jpg",
    "duration": "51 Minutes, 49 Seconds",
    "durationSeconds": 3109,
    "durationMinutes": 51.82,
    "durationTimestamp": "51:49",
    "uploadedTime": "2022-11-07T20:47:54"
  },
  {
    "title": "Madinah Book 1 | Session 4 - L3 Part 2 - Definite Article | Abu Kenzah",
    "videoUrl": "https://www.youtube.com/watch?v=C_MGb8jxD2E",
    "thumbnailUrl": "https://i.ytimg.com/vi/C_MGb8jxD2E/maxresdefault.jpg",
    "duration": "46 Minutes, 24 Seconds",
    "durationSeconds": 2784,
    "durationMinutes": 46.4,
    "durationTimestamp": "46:24",
    "uploadedTime": "2022-11-14T20:31:27"
  },
  {
    "title": "Madinah Book 1 | Session 5 - L4 - Prepositions | Abu Kenzah",
    "videoUrl": "https://www.youtube.com/watch?v=pKhD2UnPk9c",
    "thumbnailUrl": "https://i.ytimg.com/vi/pKhD2UnPk9c/maxresdefault.jpg",
    "duration": "40 Minutes, 5 Seconds",
    "durationSeconds": 2405,
    "durationMinutes": 40.08,
    "durationTimestamp": "40:05",
    "uploadedTime": "2022-11-21T19:54:02"
  },
  {
    "title": "Madinah Book 1 | Session 6 - L4 Part 2 - Past Tense | Abu Kenzah",
    "videoUrl": "https://www.youtube.com/watch?v=70VH7z8Gpgo",
    "thumbnailUrl": "https://i.ytimg.com/vi/70VH7z8Gpgo/maxresdefault.jpg",
    "duration": "38 Minutes, 10 Seconds",
    "durationSeconds": 2290,
    "durationMinutes": 38.17,
    "durationTimestamp": "38:10",
    "uploadedTime": "2022-11-28T20:32:27"
  },
  {
    "title": "Madinah Book 1 | Session 7 - L5 - Possession and Possessor | Abu Kenzah",
    "videoUrl": "https://www.youtube.com/watch?v=pHIJTbnFhLw",
    "thumbnailUrl": "https://i.ytimg.com/vi/pHIJTbnFhLw/maxresdefault.jpg",
    "duration": "47 Minutes, 44 Seconds",
    "durationSeconds": 2864,
    "durationMinutes": 47.73,
    "durationTimestamp": "47:44",
    "uploadedTime": "2022-12-05T20:46:25"
  },
  {
    "title": "Madinah Book 1 | Session 8 - L5 Part 2 - Possession and Possessor | Abu Kenzah",
    "videoUrl": "https://www.youtube.com/watch?v=e5NqxLKLmVo",
    "thumbnailUrl": "https://i.ytimg.com/vi/e5NqxLKLmVo/maxresdefault.jpg",
    "duration": "1 Hours, 5 Minutes, 28 Seconds",
    "durationSeconds": 3928,
    "durationMinutes": 65.47,
    "durationTimestamp": "1:05:28",
    "uploadedTime": "2022-12-12T20:39:22"
  },
  {
    "title": "Madinah Book 1 | Session 9 - L6 - Feminine Demonstrative Pronoun | Abu Kenzah",
    "videoUrl": "https://www.youtube.com/watch?v=E0YJgo9YSAQ",
    "thumbnailUrl": "https://i.ytimg.com/vi/E0YJgo9YSAQ/maxresdefault.jpg",
    "duration": "43 Minutes, 21 Seconds",
    "durationSeconds": 2601,
    "durationMinutes": 43.35,
    "durationTimestamp": "43:21",
    "uploadedTime": "2022-12-19T20:19:53"
  },
  {
    "title": "Madinah Book 1 | L6 Part 2- Feminine Demonstrative Pronoun | Abu Kenzah",
    "videoUrl": "https://www.youtube.com/watch?v=AMftsqAHj2s",
    "thumbnailUrl": "https://i.ytimg.com/vi/AMftsqAHj2s/maxresdefault.jpg",
    "duration": "44 Minutes, 38 Seconds",
    "durationSeconds": 2678,
    "durationMinutes": 44.63,
    "durationTimestamp": "44:38",
    "uploadedTime": "2022-12-26T20:29:07"
  },
  {
    "title": "Madinah Book 1 | L7 - Feminine Demonstrative Pronouns | Abu Kenzah",
    "videoUrl": "https://www.youtube.com/watch?v=nUpVDCVENOc",
    "thumbnailUrl": "https://i.ytimg.com/vi/nUpVDCVENOc/maxresdefault.jpg",
    "duration": "39 Minutes, 50 Seconds",
    "durationSeconds": 2390,
    "durationMinutes": 39.83,
    "durationTimestamp": "39:50",
    "uploadedTime": "2023-01-02T21:18:28"
  },
  {
    "title": "Madinah Book 1 | L8 -  Demonstrative Pronouns | Abu Kenzah",
    "videoUrl": "https://www.youtube.com/watch?v=5TR7GWRMC2Y",
    "thumbnailUrl": "https://i.ytimg.com/vi/5TR7GWRMC2Y/maxresdefault.jpg",
    "duration": "47 Minutes, 30 Seconds",
    "durationSeconds": 2850,
    "durationMinutes": 47.5,
    "durationTimestamp": "47:30",
    "uploadedTime": "2023-01-09T20:31:25"
  },
  {
    "title": "Madinah Book 1 | Lesson 9 Part 1",
    "videoUrl": "https://www.youtube.com/watch?v=bzAOqEQQ4RI",
    "thumbnailUrl": "https://i.ytimg.com/vi/bzAOqEQQ4RI/maxresdefault.jpg",
    "duration": "40 Minutes, 20 Seconds",
    "durationSeconds": 2420,
    "durationMinutes": 40.33,
    "durationTimestamp": "40:20",
    "uploadedTime": "2023-02-06T21:51:44"
  },
  {
    "title": "Madinah Book 1 Lesson 9 Part 2",
    "videoUrl": "https://www.youtube.com/watch?v=96Cz25wbfF4",
    "thumbnailUrl": "https://i.ytimg.com/vi/96Cz25wbfF4/maxresdefault.jpg",
    "duration": "35 Minutes, 3 Seconds",
    "durationSeconds": 2103,
    "durationMinutes": 35.05,
    "durationTimestamp": "35:03",
    "uploadedTime": "2023-02-13T22:44:20"
  },
  {
    "title": "Madinah Book 1 | lesson 10 Part 1",
    "videoUrl": "https://www.youtube.com/watch?v=_mwNkwa811Q",
    "thumbnailUrl": "https://i.ytimg.com/vi/_mwNkwa811Q/maxresdefault.jpg",
    "duration": "35 Minutes, 31 Seconds",
    "durationSeconds": 2131,
    "durationMinutes": 35.52,
    "durationTimestamp": "35:31",
    "uploadedTime": "2023-02-20T23:28:35"
  },
  {
    "title": "Madinah Book 1 | Lesson 10 Part 2",
    "videoUrl": "https://www.youtube.com/watch?v=eWdeGbMvO24",
    "thumbnailUrl": "https://i.ytimg.com/vi/eWdeGbMvO24/maxresdefault.jpg",
    "duration": "35 Minutes, 14 Seconds",
    "durationSeconds": 2114,
    "durationMinutes": 35.23,
    "durationTimestamp": "35:14",
    "uploadedTime": "2023-03-06T22:07:32"
  },
  {
    "title": "Madinah Book 1 | Lesson 11",
    "videoUrl": "https://www.youtube.com/watch?v=3UJF_MUeun8",
    "thumbnailUrl": "https://i.ytimg.com/vi/3UJF_MUeun8/maxresdefault.jpg",
    "duration": "30 Minutes, 29 Seconds",
    "durationSeconds": 1829,
    "durationMinutes": 30.48,
    "durationTimestamp": "30:29",
    "uploadedTime": "2023-03-13T21:20:50"
  },
  {
    "title": "Madinah Book 1 | Lesson 12",
    "videoUrl": "https://www.youtube.com/watch?v=uNcKEppIh2A",
    "thumbnailUrl": "https://i.ytimg.com/vi/uNcKEppIh2A/maxresdefault.jpg",
    "duration": "41 Minutes, 24 Seconds",
    "durationSeconds": 2484,
    "durationMinutes": 41.4,
    "durationTimestamp": "41:24",
    "uploadedTime": "2023-03-20T22:04:24"
  },
  {
    "title": "Madinah Book 1 | Lesson 12",
    "videoUrl": "https://www.youtube.com/watch?v=5dDaOkXHjNE",
    "thumbnailUrl": "https://i.ytimg.com/vi/5dDaOkXHjNE/maxresdefault.jpg",
    "duration": "37 Minutes, 9 Seconds",
    "durationSeconds": 2229,
    "durationMinutes": 37.15,
    "durationTimestamp": "37:09",
    "uploadedTime": "2023-05-02T07:33:58"
  },
  {
    "title": "Madinah Book 1 | Lesson 13",
    "videoUrl": "https://www.youtube.com/watch?v=0adRXZzkM4Y",
    "thumbnailUrl": "https://i.ytimg.com/vi/0adRXZzkM4Y/maxresdefault.jpg",
    "duration": "1 Hours, 7 Minutes, 58 Seconds",
    "durationSeconds": 4078,
    "durationMinutes": 67.97,
    "durationTimestamp": "1:07:58",
    "uploadedTime": "2023-05-09T07:46:13"
  },
  {
    "title": "Madinah Book 1 | Lesson 13 - Part 2",
    "videoUrl": "https://www.youtube.com/watch?v=rXIcysffO7o",
    "thumbnailUrl": "https://i.ytimg.com/vi/rXIcysffO7o/maxresdefault.jpg",
    "duration": "55 Minutes, 0 Seconds",
    "durationSeconds": 3300,
    "durationMinutes": 55,
    "durationTimestamp": "55:00",
    "uploadedTime": "2023-05-23T08:12:37"
  },
  {
    "title": "Madinah Book 1 | Lesson 13 - Part 3",
    "videoUrl": "https://www.youtube.com/watch?v=ML0bTrvdiLk",
    "thumbnailUrl": "https://i.ytimg.com/vi/ML0bTrvdiLk/maxresdefault.jpg",
    "duration": "42 Minutes, 20 Seconds",
    "durationSeconds": 2540,
    "durationMinutes": 42.33,
    "durationTimestamp": "42:20",
    "uploadedTime": "2023-05-30T07:36:11"
  },
  {
    "title": "Madinah Book 1 | Lesson 14",
    "videoUrl": "https://www.youtube.com/watch?v=wBeWIoUzB9Y",
    "thumbnailUrl": "https://i.ytimg.com/vi/wBeWIoUzB9Y/maxresdefault.jpg",
    "duration": "38 Minutes, 2 Seconds",
    "durationSeconds": 2282,
    "durationMinutes": 38.03,
    "durationTimestamp": "38:02",
    "uploadedTime": "2023-06-06T07:56:11"
  },
  {
    "title": "Madinah Book 1 | Lesson 15",
    "videoUrl": "https://www.youtube.com/watch?v=cEa2YNxn-qw",
    "thumbnailUrl": "https://i.ytimg.com/vi/cEa2YNxn-qw/maxresdefault.jpg",
    "duration": "28 Minutes, 41 Seconds",
    "durationSeconds": 1721,
    "durationMinutes": 28.68,
    "durationTimestamp": "28:41",
    "uploadedTime": "2023-06-13T08:09:08"
  },
  {
    "title": "Madinah Book 1 | Lesson 16",
    "videoUrl": "https://www.youtube.com/watch?v=BJqMfdvomWE",
    "thumbnailUrl": "https://i.ytimg.com/vi/BJqMfdvomWE/maxresdefault.jpg",
    "duration": "30 Minutes, 21 Seconds",
    "durationSeconds": 1821,
    "durationMinutes": 30.35,
    "durationTimestamp": "30:21",
    "uploadedTime": "2023-06-20T08:03:47"
  },
  {
    "title": "Madinah Book 1 | Lesson 17",
    "videoUrl": "https://www.youtube.com/watch?v=d2wO3W0AX1w",
    "thumbnailUrl": "https://i.ytimg.com/vi/d2wO3W0AX1w/maxresdefault.jpg",
    "duration": "49 Minutes, 31 Seconds",
    "durationSeconds": 2971,
    "durationMinutes": 49.52,
    "durationTimestamp": "49:31",
    "uploadedTime": "2023-07-04T08:43:06"
  },
  {
    "title": "Madinah Book 1 | Lesson 18",
    "videoUrl": "https://www.youtube.com/watch?v=D_o9zPm7vIc",
    "thumbnailUrl": "https://i.ytimg.com/vi/D_o9zPm7vIc/maxresdefault.jpg",
    "duration": "29 Minutes, 27 Seconds",
    "durationSeconds": 1767,
    "durationMinutes": 29.45,
    "durationTimestamp": "29:27",
    "uploadedTime": "2023-07-11T08:11:03"
  },
  {
    "title": "Madinah Book 1 | Lesson 19",
    "videoUrl": "https://www.youtube.com/watch?v=T9KFAeyQKf8",
    "thumbnailUrl": "https://i.ytimg.com/vi/T9KFAeyQKf8/maxresdefault.jpg",
    "duration": "47 Minutes, 24 Seconds",
    "durationSeconds": 2844,
    "durationMinutes": 47.4,
    "durationTimestamp": "47:24",
    "uploadedTime": "2023-07-18T08:19:26"
  },
  {
    "title": "Madinah Book 1 | Lesson 20",
    "videoUrl": "https://www.youtube.com/watch?v=uoBo8RXCUdA",
    "thumbnailUrl": "https://i.ytimg.com/vi/uoBo8RXCUdA/maxresdefault.jpg",
    "duration": "33 Minutes, 19 Seconds",
    "durationSeconds": 1999,
    "durationMinutes": 33.32,
    "durationTimestamp": "33:19",
    "uploadedTime": "2023-07-25T08:07:05"
  },
  {
    "title": "Madinah Book 1 | Lesson 21",
    "videoUrl": "https://www.youtube.com/watch?v=fEhFAKf7R0I",
    "thumbnailUrl": "https://i.ytimg.com/vi/fEhFAKf7R0I/maxresdefault.jpg",
    "duration": "28 Minutes, 26 Seconds",
    "durationSeconds": 1706,
    "durationMinutes": 28.43,
    "durationTimestamp": "28:26",
    "uploadedTime": "2023-08-01T08:03:17"
  },
  {
    "title": "Madinah Book 1 | Lesson 22",
    "videoUrl": "https://www.youtube.com/watch?v=5H29bQllugQ",
    "thumbnailUrl": "https://i.ytimg.com/vi/5H29bQllugQ/maxresdefault.jpg",
    "duration": "38 Minutes, 12 Seconds",
    "durationSeconds": 2292,
    "durationMinutes": 38.2,
    "durationTimestamp": "38:12",
    "uploadedTime": "2023-08-08T07:46:27"
  },
  {
    "title": "Madinah Book 1 | Lesson 23",
    "videoUrl": "https://www.youtube.com/watch?v=MLL1yPLNURY",
    "thumbnailUrl": "https://i.ytimg.com/vi/MLL1yPLNURY/maxresdefault.jpg",
    "duration": "43 Minutes, 30 Seconds",
    "durationSeconds": 2610,
    "durationMinutes": 43.5,
    "durationTimestamp": "43:30",
    "uploadedTime": "2023-08-15T07:30:26"
  }
];

// Book 2 YouTube Videos
const book2YouTubeVideos: YouTubeVideo[] = [
  { "title": "Madinah Book 2 Lesson 1 | Pt 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=hl6NgSOHTLA", "thumbnailUrl": "https://i.ytimg.com/vi/hl6NgSOHTLA/maxresdefault.jpg", "duration": "39 Minutes, 21 Seconds", "durationSeconds": 2361, "durationMinutes": 39.35, "durationTimestamp": "39:21", "uploadedTime": "2020-10-05T19:19:52" },
  { "title": "Madinah Book 2 Lesson 1 | PT2  | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=X7DGwlE7dSw", "thumbnailUrl": "https://i.ytimg.com/vi/X7DGwlE7dSw/maxresdefault.jpg", "duration": "38 Minutes, 19 Seconds", "durationSeconds": 2299, "durationMinutes": 38.32, "durationTimestamp": "38:19", "uploadedTime": "2020-10-12T21:03:33" },
  { "title": "Madinah Book 2 Lesson 2 | PT1  | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=1mdX7vdQpUg", "thumbnailUrl": "https://i.ytimg.com/vi/1mdX7vdQpUg/maxresdefault.jpg", "duration": "53 Minutes, 3 Seconds", "durationSeconds": 3183, "durationMinutes": 53.05, "durationTimestamp": "53:03", "uploadedTime": "2020-10-19T20:59:31" },
  { "title": "Madinah Book 2 Lesson 2 | PT2  | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=g2zIFyMmTYY", "thumbnailUrl": "https://i.ytimg.com/vi/g2zIFyMmTYY/maxresdefault.jpg", "duration": "44 Minutes, 53 Seconds", "durationSeconds": 2693, "durationMinutes": 44.88, "durationTimestamp": "44:53", "uploadedTime": "2020-10-26T21:30:24" },
  { "title": "Madinah Book 2 Lesson 3 | PT1  | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=oxlZ8mCvKWo", "thumbnailUrl": "https://i.ytimg.com/vi/oxlZ8mCvKWo/maxresdefault.jpg", "duration": "53 Minutes, 7 Seconds", "durationSeconds": 3187, "durationMinutes": 53.12, "durationTimestamp": "53:07", "uploadedTime": "2020-11-02T20:57:09" },
  { "title": "Madinah Book 2 Lesson 3 | PT2  | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=EZtD--rau34", "thumbnailUrl": "https://i.ytimg.com/vi/EZtD--rau34/maxresdefault.jpg", "duration": "29 Minutes, 2 Seconds", "durationSeconds": 1742, "durationMinutes": 29.03, "durationTimestamp": "29:02", "uploadedTime": "2020-11-25T14:55:54" },
  { "title": "Madinah Book 2 Lesson 4 | PT1  | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=dpRKcRrKMNE", "thumbnailUrl": "https://i.ytimg.com/vi/dpRKcRrKMNE/maxresdefault.jpg", "duration": "34 Minutes, 45 Seconds", "durationSeconds": 2085, "durationMinutes": 34.75, "durationTimestamp": "34:45", "uploadedTime": "2020-12-07T21:09:26" },
  { "title": "Madinah Book 2 Lesson 4 | PT2  | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=FYWbyL-qSCg", "thumbnailUrl": "https://i.ytimg.com/vi/FYWbyL-qSCg/maxresdefault.jpg", "duration": "13 Minutes, 17 Seconds", "durationSeconds": 797, "durationMinutes": 13.28, "durationTimestamp": "13:17", "uploadedTime": "2020-12-07T21:23:31" },
  { "title": "Madinah Book 2 Lesson 5 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=jKovvEDA3QU", "thumbnailUrl": "https://i.ytimg.com/vi/jKovvEDA3QU/maxresdefault.jpg", "duration": "54 Minutes, 25 Seconds", "durationSeconds": 3265, "durationMinutes": 54.42, "durationTimestamp": "54:25", "uploadedTime": "2020-12-14T20:45:23" },
  { "title": "Madinah Book 2 Lesson 6 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=vwY4ad0NZ24", "thumbnailUrl": "https://i.ytimg.com/vi/vwY4ad0NZ24/maxresdefault.jpg", "duration": "32 Minutes, 58 Seconds", "durationSeconds": 1978, "durationMinutes": 32.97, "durationTimestamp": "32:58", "uploadedTime": "2021-03-01T19:46:23" },
  { "title": "Madinah Book 2 Lesson 6 | PT2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=b1BOPArUU1k", "thumbnailUrl": "https://i.ytimg.com/vi/b1BOPArUU1k/maxresdefault.jpg", "duration": "34 Minutes, 52 Seconds", "durationSeconds": 2092, "durationMinutes": 34.87, "durationTimestamp": "34:52", "uploadedTime": "2021-03-08T19:35:14" },
  { "title": "Madinah Book 2 Lesson 6 | PT3 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=ThtLgpKqfh0", "thumbnailUrl": "https://i.ytimg.com/vi/ThtLgpKqfh0/maxresdefault.jpg", "duration": "42 Minutes, 54 Seconds", "durationSeconds": 2574, "durationMinutes": 42.9, "durationTimestamp": "42:54", "uploadedTime": "2021-03-15T19:53:03" },
  { "title": "Madinah Book 2 Lesson 7 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=vJ6WPPzMcAw", "thumbnailUrl": "https://i.ytimg.com/vi/vJ6WPPzMcAw/maxresdefault.jpg", "duration": "44 Minutes, 38 Seconds", "durationSeconds": 2678, "durationMinutes": 44.63, "durationTimestamp": "44:38", "uploadedTime": "2021-03-22T20:18:43" },
  { "title": "Madinah Book 2 Lesson 7 | PT2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=aasdkfIWPE4", "thumbnailUrl": "https://i.ytimg.com/vi/aasdkfIWPE4/maxresdefault.jpg", "duration": "54 Minutes, 58 Seconds", "durationSeconds": 3298, "durationMinutes": 54.97, "durationTimestamp": "54:58", "uploadedTime": "2021-03-29T20:05:00" },
  { "title": "Madinah Book 2 Lesson 8 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=bv-V0XPux-w", "thumbnailUrl": "https://i.ytimg.com/vi/bv-V0XPux-w/maxresdefault.jpg", "duration": "1 Hours, 1 Minutes, 31 Seconds", "durationSeconds": 3691, "durationMinutes": 61.52, "durationTimestamp": "1:01:31", "uploadedTime": "2021-04-05T18:41:11" },
  { "title": "Madinah Book 2 Lesson 9 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=34z__X2HmYI", "thumbnailUrl": "https://i.ytimg.com/vi/34z__X2HmYI/maxresdefault.jpg", "duration": "1 Hours, 0 Minutes, 11 Seconds", "durationSeconds": 3611, "durationMinutes": 60.18, "durationTimestamp": "1:00:11", "uploadedTime": "2021-05-24T20:10:43" },
  { "title": "Madinah Book 2 Lesson 9 | PT2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=2-gdnzaaqJ8", "thumbnailUrl": "https://i.ytimg.com/vi/2-gdnzaaqJ8/maxresdefault.jpg", "duration": "1 Hours, 3 Minutes, 36 Seconds", "durationSeconds": 3816, "durationMinutes": 63.6, "durationTimestamp": "1:03:36", "uploadedTime": "2021-06-07T20:18:06" },
  { "title": "Madinah Book 2 Lesson 10 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=coMZUMjcCCY", "thumbnailUrl": "https://i.ytimg.com/vi/coMZUMjcCCY/maxresdefault.jpg", "duration": "1 Hours, 2 Minutes, 53 Seconds", "durationSeconds": 3773, "durationMinutes": 62.88, "durationTimestamp": "1:02:53", "uploadedTime": "2021-06-14T20:13:54" },
  { "title": "Madinah Book 2 Lesson 11 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=j-eLzLTILsc", "thumbnailUrl": "https://i.ytimg.com/vi/j-eLzLTILsc/maxresdefault.jpg", "duration": "33 Minutes, 7 Seconds", "durationSeconds": 1987, "durationMinutes": 33.12, "durationTimestamp": "33:07", "uploadedTime": "2021-06-26T10:51:40" },
  { "title": "Madinah Book 2 Lesson 11 | PT2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=SRSU4b9UDWk", "thumbnailUrl": "https://i.ytimg.com/vi/SRSU4b9UDWk/maxresdefault.jpg", "duration": "1 Hours, 1 Minutes, 51 Seconds", "durationSeconds": 3711, "durationMinutes": 61.85, "durationTimestamp": "1:01:51", "uploadedTime": "2021-07-01T11:48:47" },
  { "title": "Madinah Book 2 Lesson 12 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=kUqaC2t7mGE", "thumbnailUrl": "https://i.ytimg.com/vi/kUqaC2t7mGE/maxresdefault.jpg", "duration": "39 Minutes, 32 Seconds", "durationSeconds": 2372, "durationMinutes": 39.53, "durationTimestamp": "39:32", "uploadedTime": "2021-08-03T17:29:32" },
  { "title": "Madinah Book 2 Lesson 12 | PT2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=XA1YJ0RUc7o", "thumbnailUrl": "https://i.ytimg.com/vi/XA1YJ0RUc7o/maxresdefault.jpg", "duration": "35 Minutes, 48 Seconds", "durationSeconds": 2148, "durationMinutes": 35.8, "durationTimestamp": "35:48", "uploadedTime": "2021-08-10T16:26:16" },
  { "title": "Madinah Book 2 Lesson 13 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=tJMUpFwvTiY", "thumbnailUrl": "https://i.ytimg.com/vi/tJMUpFwvTiY/maxresdefault.jpg", "duration": "37 Minutes, 52 Seconds", "durationSeconds": 2272, "durationMinutes": 37.87, "durationTimestamp": "37:52", "uploadedTime": "2021-08-16T19:34:12" },
  { "title": "Madinah Book 2 Lesson 14 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=BK2Zv7jiaHs", "thumbnailUrl": "https://i.ytimg.com/vi/BK2Zv7jiaHs/maxresdefault.jpg", "duration": "33 Minutes, 52 Seconds", "durationSeconds": 2032, "durationMinutes": 33.87, "durationTimestamp": "33:52", "uploadedTime": "2021-08-23T20:23:58" },
  { "title": "Madinah Book 2 Lesson 14 | PT2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=obcm3IhFSBU", "thumbnailUrl": "https://i.ytimg.com/vi/obcm3IhFSBU/maxresdefault.jpg", "duration": "53 Minutes, 23 Seconds", "durationSeconds": 3203, "durationMinutes": 53.38, "durationTimestamp": "53:23", "uploadedTime": "2021-09-06T20:22:01" },
  { "title": "Madinah Book 2 Lesson 15 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=S8Lnw4dKmXY", "thumbnailUrl": "https://i.ytimg.com/vi/S8Lnw4dKmXY/maxresdefault.jpg", "duration": "25 Minutes, 8 Seconds", "durationSeconds": 1508, "durationMinutes": 25.13, "durationTimestamp": "25:08", "uploadedTime": "2021-09-13T18:34:33" },
  { "title": "Madinah Book 2 Lesson 15 | PT2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=-_ISAJlDO6s", "thumbnailUrl": "https://i.ytimg.com/vi/-_ISAJlDO6s/maxresdefault.jpg", "duration": "40 Minutes, 43 Seconds", "durationSeconds": 2443, "durationMinutes": 40.72, "durationTimestamp": "40:43", "uploadedTime": "2021-09-20T19:50:22" },
  { "title": "Madinah Book 2 Lesson 16 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=O0qK7tEKgsI", "thumbnailUrl": "https://i.ytimg.com/vi/O0qK7tEKgsI/maxresdefault.jpg", "duration": "38 Minutes, 9 Seconds", "durationSeconds": 2289, "durationMinutes": 38.15, "durationTimestamp": "38:09", "uploadedTime": "2021-09-28T09:26:25" },
  { "title": "Madinah Book 2 Lesson 16 | PT2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=Oo4BLz5ogkc", "thumbnailUrl": "https://i.ytimg.com/vi/Oo4BLz5ogkc/maxresdefault.jpg", "duration": "54 Minutes, 57 Seconds", "durationSeconds": 3297, "durationMinutes": 54.95, "durationTimestamp": "54:57", "uploadedTime": "2021-10-04T19:38:18" },
  { "title": "Madinah Book 2 Lesson 17 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=wFaqrhszUg8", "thumbnailUrl": "https://i.ytimg.com/vi/wFaqrhszUg8/maxresdefault.jpg", "duration": "51 Minutes, 50 Seconds", "durationSeconds": 3110, "durationMinutes": 51.83, "durationTimestamp": "51:50", "uploadedTime": "2021-11-01T20:12:23" },
  { "title": "Madinah Book 2 Lesson 17 | PT2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=d-RqvdoQ474", "thumbnailUrl": "https://i.ytimg.com/vi/d-RqvdoQ474/maxresdefault.jpg", "duration": "47 Minutes, 24 Seconds", "durationSeconds": 2844, "durationMinutes": 47.4, "durationTimestamp": "47:24", "uploadedTime": "2021-11-08T20:13:40" },
  { "title": "Madinah Book 2 Lesson 18 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=z6NvszLys-E", "thumbnailUrl": "https://i.ytimg.com/vi/z6NvszLys-E/maxresdefault.jpg", "duration": "38 Minutes, 27 Seconds", "durationSeconds": 2307, "durationMinutes": 38.45, "durationTimestamp": "38:27", "uploadedTime": "2021-11-15T20:08:09" },
  { "title": "Madinah Book 2 Lesson 18 | PT2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=UYY23auRtRI", "thumbnailUrl": "https://i.ytimg.com/vi/UYY23auRtRI/maxresdefault.jpg", "duration": "1 Hours, 0 Minutes, 0 Seconds", "durationSeconds": 3600, "durationMinutes": 60, "durationTimestamp": "1:00:00", "uploadedTime": "2021-11-29T20:30:34" },
  { "title": "Madinah Book 2 Lesson 19 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=y5UE2sfBeng", "thumbnailUrl": "https://i.ytimg.com/vi/y5UE2sfBeng/maxresdefault.jpg", "duration": "1 Hours, 0 Minutes, 27 Seconds", "durationSeconds": 3627, "durationMinutes": 60.45, "durationTimestamp": "1:00:27", "uploadedTime": "2021-12-13T20:25:05" },
  { "title": "Madinah Book 2 Lesson 20 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=DZNGOqL5zsU", "thumbnailUrl": "https://i.ytimg.com/vi/DZNGOqL5zsU/maxresdefault.jpg", "duration": "50 Minutes, 48 Seconds", "durationSeconds": 3048, "durationMinutes": 50.8, "durationTimestamp": "50:48", "uploadedTime": "2022-01-03T20:27:37" },
  { "title": "Madinah Book 2 Lesson 21 | PT1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=-SSadJJ-bek", "thumbnailUrl": "https://i.ytimg.com/vi/-SSadJJ-bek/maxresdefault.jpg", "duration": "48 Minutes, 22 Seconds", "durationSeconds": 2902, "durationMinutes": 48.37, "durationTimestamp": "48:22", "uploadedTime": "2022-01-10T20:25:51" },
  { "title": "Madinah Book 2 Lesson 21 | PT2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=yTNmJmvuieM", "thumbnailUrl": "https://i.ytimg.com/vi/yTNmJmvuieM/maxresdefault.jpg", "duration": "46 Minutes, 10 Seconds", "durationSeconds": 2770, "durationMinutes": 46.17, "durationTimestamp": "46:10", "uploadedTime": "2022-01-17T20:13:30" },
  { "title": "Madinah Book 2 Lesson 22 & 23 Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=fmak4FatqWo", "thumbnailUrl": "https://i.ytimg.com/vi/fmak4FatqWo/maxresdefault.jpg", "duration": "30 Minutes, 38 Seconds", "durationSeconds": 1838, "durationMinutes": 30.63, "durationTimestamp": "30:38", "uploadedTime": "2022-01-24T20:19:08" },
  { "title": "Madinah Book 2 Lesson 23 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=43JzkzK-dZo", "thumbnailUrl": "https://i.ytimg.com/vi/43JzkzK-dZo/maxresdefault.jpg", "duration": "57 Minutes, 5 Seconds", "durationSeconds": 3425, "durationMinutes": 57.08, "durationTimestamp": "57:05", "uploadedTime": "2022-02-21T20:59:24" },
  { "title": "Madinah Book 2 Lesson 24 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=ghwHNqq3oCA", "thumbnailUrl": "https://i.ytimg.com/vi/ghwHNqq3oCA/maxresdefault.jpg", "duration": "42 Minutes, 30 Seconds", "durationSeconds": 2550, "durationMinutes": 42.5, "durationTimestamp": "42:30", "uploadedTime": "2022-03-08T09:00:29" },
  { "title": "Madinah Book 2 Lesson 25 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=DJBc9WAOu8s", "thumbnailUrl": "https://i.ytimg.com/vi/DJBc9WAOu8s/maxresdefault.jpg", "duration": "35 Minutes, 46 Seconds", "durationSeconds": 2146, "durationMinutes": 35.77, "durationTimestamp": "35:46", "uploadedTime": "2022-03-15T17:12:16" },
  { "title": "Madinah Book 2 Lesson 26 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=SMep_PunmC8", "thumbnailUrl": "https://i.ytimg.com/vi/SMep_PunmC8/maxresdefault.jpg", "duration": "45 Minutes, 11 Seconds", "durationSeconds": 2711, "durationMinutes": 45.18, "durationTimestamp": "45:11", "uploadedTime": "2022-03-21T21:20:52" },
  { "title": "Madinah Book 2 Lesson 26 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=t6fv8enIkA0", "thumbnailUrl": "https://i.ytimg.com/vi/t6fv8enIkA0/maxresdefault.jpg", "duration": "50 Minutes, 57 Seconds", "durationSeconds": 3057, "durationMinutes": 50.95, "durationTimestamp": "50:57", "uploadedTime": "2022-05-23T19:48:07" },
  { "title": "Madinah Book 2 Lesson 27 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=3H8Fnd5fMxs", "thumbnailUrl": "https://i.ytimg.com/vi/3H8Fnd5fMxs/maxresdefault.jpg", "duration": "1 Hours, 0 Minutes, 4 Seconds", "durationSeconds": 3604, "durationMinutes": 60.07, "durationTimestamp": "1:00:04", "uploadedTime": "2022-05-30T19:59:22" },
  { "title": "Madinah Book 2 Lesson 27 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=zmW9AS3H3Zw", "thumbnailUrl": "https://i.ytimg.com/vi/zmW9AS3H3Zw/maxresdefault.jpg", "duration": "1 Hours, 1 Minutes, 36 Seconds", "durationSeconds": 3696, "durationMinutes": 61.6, "durationTimestamp": "1:01:36", "uploadedTime": "2022-06-13T19:49:19" },
  { "title": "Madinah Book 2 Lesson 28 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=n2cH1yfByT4", "thumbnailUrl": "https://i.ytimg.com/vi/n2cH1yfByT4/maxresdefault.jpg", "duration": "49 Minutes, 45 Seconds", "durationSeconds": 2985, "durationMinutes": 49.75, "durationTimestamp": "49:45", "uploadedTime": "2022-06-20T19:47:33" },
  { "title": "Madinah Book 2 Lesson 28 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=EKi9a-FS9mY", "thumbnailUrl": "https://i.ytimg.com/vi/EKi9a-FS9mY/maxresdefault.jpg", "duration": "43 Minutes, 16 Seconds", "durationSeconds": 2596, "durationMinutes": 43.27, "durationTimestamp": "43:16", "uploadedTime": "2022-07-04T19:50:16" },
  { "title": "Madinah Book 2 Lesson 29 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=WCAJtwNPjv4", "thumbnailUrl": "https://i.ytimg.com/vi/WCAJtwNPjv4/maxresdefault.jpg", "duration": "45 Minutes, 50 Seconds", "durationSeconds": 2750, "durationMinutes": 45.83, "durationTimestamp": "45:50", "uploadedTime": "2022-07-18T20:17:48" },
  { "title": "Madinah Book 2 Lesson 30 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=dxom_ph41_k", "thumbnailUrl": "https://i.ytimg.com/vi/dxom_ph41_k/maxresdefault.jpg", "duration": "46 Minutes, 0 Seconds", "durationSeconds": 2760, "durationMinutes": 46, "durationTimestamp": "46:00", "uploadedTime": "2022-08-01T19:38:51" },
  { "title": "Madinah Book 2 | Lesson 31 - Final Lesson | Abu Kenzah", "videoUrl": "https://www.youtube.com/watch?v=gN0OvMFDzPo", "thumbnailUrl": "https://i.ytimg.com/vi/gN0OvMFDzPo/maxresdefault.jpg", "duration": "28 Minutes, 19 Seconds", "durationSeconds": 1699, "durationMinutes": 28.32, "durationTimestamp": "28:19", "uploadedTime": "2022-08-17T16:30:05" }
];

// Book 3 YouTube Videos
const book3YouTubeVideos: YouTubeVideo[] = [
  { "title": "Madinah Book 3 Lesson 1 |  Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=oZQdszBe8eI", "thumbnailUrl": "https://i.ytimg.com/vi/oZQdszBe8eI/maxresdefault.jpg", "duration": "1 Hours, 21 Minutes, 3 Seconds", "durationSeconds": 4863, "durationMinutes": 81.05, "durationTimestamp": "1:21:03", "uploadedTime": "2024-01-30T09:30:03" },
  { "title": "Madinah Book 3 Lesson 1 | Part 2 |  Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=m-cKPBuoEbE", "thumbnailUrl": "https://i.ytimg.com/vi/m-cKPBuoEbE/maxresdefault.jpg", "duration": "1 Hours, 3 Minutes, 31 Seconds", "durationSeconds": 3811, "durationMinutes": 63.52, "durationTimestamp": "1:03:31", "uploadedTime": "2024-02-06T09:10:09" },
  { "title": "Madinah Book 3 Lesson 2 | Part 1 |  Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=9yhbK_Fmbbs", "thumbnailUrl": "https://i.ytimg.com/vi/9yhbK_Fmbbs/maxresdefault.jpg", "duration": "54 Minutes, 26 Seconds", "durationSeconds": 3266, "durationMinutes": 54.43, "durationTimestamp": "54:26", "uploadedTime": "2024-02-13T09:12:31" },
  { "title": "Madinah Book 3 Lesson 2 | Part 2 |  Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=WNxKqsT7NXs", "thumbnailUrl": "https://i.ytimg.com/vi/WNxKqsT7NXs/maxresdefault.jpg", "duration": "44 Minutes, 1 Seconds", "durationSeconds": 2641, "durationMinutes": 44.02, "durationTimestamp": "44:01", "uploadedTime": "2024-02-20T09:03:58" },
  { "title": "Madinah Book 3 Lesson 3 | Part 1 |  Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=s76GV5IGO48", "thumbnailUrl": "https://i.ytimg.com/vi/s76GV5IGO48/maxresdefault.jpg", "duration": "1 Hours, 8 Minutes, 50 Seconds", "durationSeconds": 4130, "durationMinutes": 68.83, "durationTimestamp": "1:08:50", "uploadedTime": "2024-02-27T09:28:05" },
  { "title": "Madinah Book 3 Lesson 3 | Part 2 |  Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=cIM4Y9-wdgo", "thumbnailUrl": "https://i.ytimg.com/vi/cIM4Y9-wdgo/maxresdefault.jpg", "duration": "55 Minutes, 10 Seconds", "durationSeconds": 3310, "durationMinutes": 55.17, "durationTimestamp": "55:10", "uploadedTime": "2024-03-05T09:27:31" },
  { "title": "Madinah Book 3 Lesson 4 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=2E-V8PUHSSo", "thumbnailUrl": "https://i.ytimg.com/vi/2E-V8PUHSSo/maxresdefault.jpg", "duration": "26 Minutes, 16 Seconds", "durationSeconds": 1576, "durationMinutes": 26.27, "durationTimestamp": "26:16", "uploadedTime": "2024-04-23T08:19:29" },
  { "title": "Madinah Book 3 Lesson 4 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=1bzzQ5ip6YQ", "thumbnailUrl": "https://i.ytimg.com/vi/1bzzQ5ip6YQ/maxresdefault.jpg", "duration": "32 Minutes, 56 Seconds", "durationSeconds": 1976, "durationMinutes": 32.93, "durationTimestamp": "32:56", "uploadedTime": "2024-04-22T20:51:52" },
  { "title": "Madinah Book 3 Lesson 4 | Part 3 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=jaVd8mAscj4", "thumbnailUrl": "https://i.ytimg.com/vi/jaVd8mAscj4/maxresdefault.jpg", "duration": "42 Minutes, 49 Seconds", "durationSeconds": 2569, "durationMinutes": 42.82, "durationTimestamp": "42:49", "uploadedTime": "2024-04-30T08:56:35" },
  { "title": "Madinah Book 3 Lesson 5 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=S7_0D_vV6mc", "thumbnailUrl": "https://i.ytimg.com/vi/S7_0D_vV6mc/maxresdefault.jpg", "duration": "50 Minutes, 44 Seconds", "durationSeconds": 3044, "durationMinutes": 50.73, "durationTimestamp": "50:44", "uploadedTime": "2024-05-07T10:21:37" },
  { "title": "Madinah Book 3 Lesson 5 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=I2OtU9ILV80", "thumbnailUrl": "https://i.ytimg.com/vi/I2OtU9ILV80/maxresdefault.jpg", "duration": "36 Minutes, 54 Seconds", "durationSeconds": 2214, "durationMinutes": 36.9, "durationTimestamp": "36:54", "uploadedTime": "2024-05-14T09:31:39" },
  { "title": "Madinah Book 3 Lesson 5 | Part 3 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=W3BeGZ7IL70", "thumbnailUrl": "https://i.ytimg.com/vi/W3BeGZ7IL70/maxresdefault.jpg", "duration": "54 Minutes, 18 Seconds", "durationSeconds": 3258, "durationMinutes": 54.3, "durationTimestamp": "54:18", "uploadedTime": "2024-05-28T10:11:22" },
  { "title": "Madinah Book 3 Lesson 6 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=fT8zT4xnWiM", "thumbnailUrl": "https://i.ytimg.com/vi/fT8zT4xnWiM/maxresdefault.jpg", "duration": "35 Minutes, 18 Seconds", "durationSeconds": 2118, "durationMinutes": 35.3, "durationTimestamp": "35:18", "uploadedTime": "2024-06-25T08:29:23" },
  { "title": "Madinah Book 3 Lesson 6 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=pRyz9msWEX0", "thumbnailUrl": "https://i.ytimg.com/vi/pRyz9msWEX0/maxresdefault.jpg", "duration": "27 Minutes, 53 Seconds", "durationSeconds": 1673, "durationMinutes": 27.88, "durationTimestamp": "27:53", "uploadedTime": "2024-06-11T08:00:49" },
  { "title": "Madinah Book 3 Lesson 7 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=5nNENeYNFNg", "thumbnailUrl": "https://i.ytimg.com/vi/5nNENeYNFNg/maxresdefault.jpg", "duration": "36 Minutes, 4 Seconds", "durationSeconds": 2164, "durationMinutes": 36.07, "durationTimestamp": "36:04", "uploadedTime": "2024-07-02T08:18:12" },
  { "title": "Madinah Book 3 Lesson 7 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=RmRIAUw3OzA", "thumbnailUrl": "https://i.ytimg.com/vi/RmRIAUw3OzA/maxresdefault.jpg", "duration": "27 Minutes, 1 Seconds", "durationSeconds": 1621, "durationMinutes": 27.02, "durationTimestamp": "27:01", "uploadedTime": "2024-07-09T08:26:06" },
  { "title": "Madinah Book 3 Lesson 8 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=D2Tvpq5LoHs", "thumbnailUrl": "https://i.ytimg.com/vi/D2Tvpq5LoHs/maxresdefault.jpg", "duration": "29 Minutes, 25 Seconds", "durationSeconds": 1765, "durationMinutes": 29.42, "durationTimestamp": "29:25", "uploadedTime": "2024-07-16T08:01:00" },
  { "title": "Madinah Book 3 Lesson 8 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=ez2xsnKdiB8", "thumbnailUrl": "https://i.ytimg.com/vi/ez2xsnKdiB8/maxresdefault.jpg", "duration": "36 Minutes, 48 Seconds", "durationSeconds": 2208, "durationMinutes": 36.8, "durationTimestamp": "36:48", "uploadedTime": "2024-07-23T08:29:48" },
  { "title": "Madinah Book 3 Lesson 9 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=s0yjRCDBpbc", "thumbnailUrl": "https://i.ytimg.com/vi/s0yjRCDBpbc/maxresdefault.jpg", "duration": "36 Minutes, 41 Seconds", "durationSeconds": 2201, "durationMinutes": 36.68, "durationTimestamp": "36:41", "uploadedTime": "2024-08-06T07:52:03" },
  { "title": "Madinah Book 3 Lesson 9 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=R87gho5Fn6k", "thumbnailUrl": "https://i.ytimg.com/vi/R87gho5Fn6k/maxresdefault.jpg", "duration": "31 Minutes, 29 Seconds", "durationSeconds": 1889, "durationMinutes": 31.48, "durationTimestamp": "31:29", "uploadedTime": "2024-08-13T08:41:20" },
  { "title": "Madinah Book 3 Lesson 9 | Part 3 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=4keJhUX8fio", "thumbnailUrl": "https://i.ytimg.com/vi/4keJhUX8fio/maxresdefault.jpg", "duration": "34 Minutes, 59 Seconds", "durationSeconds": 2099, "durationMinutes": 34.98, "durationTimestamp": "34:59", "uploadedTime": "2024-09-17T08:12:21" },
  { "title": "Madinah Book 3 Lesson 10 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=-WWdtmc5h3M", "thumbnailUrl": "https://i.ytimg.com/vi/-WWdtmc5h3M/maxresdefault.jpg", "duration": "35 Minutes, 20 Seconds", "durationSeconds": 2120, "durationMinutes": 35.33, "durationTimestamp": "35:20", "uploadedTime": "2024-09-24T07:57:12" },
  { "title": "Madinah Book 3 Lesson 10 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=Fs6tchyKC2s", "thumbnailUrl": "https://i.ytimg.com/vi/Fs6tchyKC2s/maxresdefault.jpg", "duration": "42 Minutes, 36 Seconds", "durationSeconds": 2556, "durationMinutes": 42.6, "durationTimestamp": "42:36", "uploadedTime": "2024-10-08T09:29:12" },
  { "title": "Madinah Book 3 Lesson 11 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=y850s-cbb5o", "thumbnailUrl": "https://i.ytimg.com/vi/y850s-cbb5o/maxresdefault.jpg", "duration": "57 Minutes, 46 Seconds", "durationSeconds": 3466, "durationMinutes": 57.77, "durationTimestamp": "57:46", "uploadedTime": "2024-10-15T09:08:02" },
  { "title": "Madinah Book 3 Lesson 11 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=NtWFVAPwXB8", "thumbnailUrl": "https://i.ytimg.com/vi/NtWFVAPwXB8/maxresdefault.jpg", "duration": "1 Hours, 2 Minutes, 21 Seconds", "durationSeconds": 3741, "durationMinutes": 62.35, "durationTimestamp": "1:02:21", "uploadedTime": "2024-10-22T09:05:58" },
  { "title": "Madinah Book 3 Lesson 12 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=ZqRwvPwloCo", "thumbnailUrl": "https://i.ytimg.com/vi/ZqRwvPwloCo/maxresdefault.jpg", "duration": "36 Minutes, 45 Seconds", "durationSeconds": 2205, "durationMinutes": 36.75, "durationTimestamp": "36:45", "uploadedTime": "2024-10-29T09:17:25" },
  { "title": "Madinah Book 3 Lesson 12 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=rLL_hvBrgTw", "thumbnailUrl": "https://i.ytimg.com/vi/rLL_hvBrgTw/maxresdefault.jpg", "duration": "41 Minutes, 39 Seconds", "durationSeconds": 2499, "durationMinutes": 41.65, "durationTimestamp": "41:39", "uploadedTime": "2024-11-26T09:06:16" },
  { "title": "Madinah Book 3 Lesson 12 | Part 3 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=AwI4E6Et2q8", "thumbnailUrl": "https://i.ytimg.com/vi/AwI4E6Et2q8/maxresdefault.jpg", "duration": "43 Minutes, 10 Seconds", "durationSeconds": 2590, "durationMinutes": 43.17, "durationTimestamp": "43:10", "uploadedTime": "2024-12-03T08:46:45" },
  { "title": "Madinah Book 3 Lesson 13 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=CtLTbspW1AI", "thumbnailUrl": "https://i.ytimg.com/vi/CtLTbspW1AI/maxresdefault.jpg", "duration": "26 Minutes, 34 Seconds", "durationSeconds": 1594, "durationMinutes": 26.57, "durationTimestamp": "26:34", "uploadedTime": "2024-12-17T08:21:49" },
  { "title": "Madinah Book 3 Lesson 13 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=I0nKmT481nI", "thumbnailUrl": "https://i.ytimg.com/vi/I0nKmT481nI/maxresdefault.jpg", "duration": "46 Minutes, 15 Seconds", "durationSeconds": 2775, "durationMinutes": 46.25, "durationTimestamp": "46:15", "uploadedTime": "2024-12-24T08:32:08" },
  { "title": "Madinah Book 3 Lesson 13 | Part 3 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=tvNmFsujAFg", "thumbnailUrl": "https://i.ytimg.com/vi/tvNmFsujAFg/maxresdefault.jpg", "duration": "34 Minutes, 20 Seconds", "durationSeconds": 2060, "durationMinutes": 34.33, "durationTimestamp": "34:20", "uploadedTime": "2025-01-21T08:22:56" },
  { "title": "Madinah Book 3 Lesson 13 | Part 4 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=OY427j84zjI", "thumbnailUrl": "https://i.ytimg.com/vi/OY427j84zjI/maxresdefault.jpg", "duration": "46 Minutes, 27 Seconds", "durationSeconds": 2787, "durationMinutes": 46.45, "durationTimestamp": "46:27", "uploadedTime": "2025-01-28T08:30:21" },
  { "title": "Madinah Book 3 Lesson 15 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=RjWdjdah9ho", "thumbnailUrl": "https://i.ytimg.com/vi/RjWdjdah9ho/maxresdefault.jpg", "duration": "40 Minutes, 32 Seconds", "durationSeconds": 2432, "durationMinutes": 40.53, "durationTimestamp": "40:32", "uploadedTime": "2025-02-25T08:38:20" },
  { "title": "Madinah Book 3 Lesson 15 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=o5k2DtmXTpg", "thumbnailUrl": "https://i.ytimg.com/vi/o5k2DtmXTpg/maxresdefault.jpg", "duration": "37 Minutes, 27 Seconds", "durationSeconds": 2247, "durationMinutes": 37.45, "durationTimestamp": "37:27", "uploadedTime": "2025-04-29T09:18:04" },
  { "title": "Madinah Book 3 Lesson 15 | Part 3 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=P01Fj6hDP9Y", "thumbnailUrl": "https://i.ytimg.com/vi/P01Fj6hDP9Y/maxresdefault.jpg", "duration": "45 Minutes, 42 Seconds", "durationSeconds": 2742, "durationMinutes": 45.7, "durationTimestamp": "45:42", "uploadedTime": "2025-05-06T09:07:00" },
  { "title": "Madinah Book 3 Lesson 15 | Part 4 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=UBuHBibw3eg", "thumbnailUrl": "https://i.ytimg.com/vi/UBuHBibw3eg/maxresdefault.jpg", "duration": "34 Minutes, 7 Seconds", "durationSeconds": 2047, "durationMinutes": 34.12, "durationTimestamp": "34:07", "uploadedTime": "2025-05-13T09:10:45" },
  { "title": "Madinah Book 3 Lesson 15 | Part 5 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=YqJD4p0TcEI", "thumbnailUrl": "https://i.ytimg.com/vi/YqJD4p0TcEI/maxresdefault.jpg", "duration": "33 Minutes, 15 Seconds", "durationSeconds": 1995, "durationMinutes": 33.25, "durationTimestamp": "33:15", "uploadedTime": "2025-05-20T09:36:21" },
  { "title": "Madinah Book 3 Lesson 15 | Part 6 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=H-MvRPbDr8U", "thumbnailUrl": "https://i.ytimg.com/vi/H-MvRPbDr8U/maxresdefault.jpg", "duration": "37 Minutes, 30 Seconds", "durationSeconds": 2250, "durationMinutes": 37.5, "durationTimestamp": "37:30", "uploadedTime": "2025-06-03T08:16:05" },
  { "title": "Madinah Book 3 Lesson 16 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=S46se6Jy8ZQ", "thumbnailUrl": "https://i.ytimg.com/vi/S46se6Jy8ZQ/maxresdefault.jpg", "duration": "38 Minutes, 8 Seconds", "durationSeconds": 2288, "durationMinutes": 38.13, "durationTimestamp": "38:08", "uploadedTime": "2025-06-17T08:06:56" },
  { "title": "Madinah Book 3 Lesson 16 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=jOvNsVG2jVE", "thumbnailUrl": "https://i.ytimg.com/vi/jOvNsVG2jVE/maxresdefault.jpg", "duration": "34 Minutes, 50 Seconds", "durationSeconds": 2090, "durationMinutes": 34.83, "durationTimestamp": "34:50", "uploadedTime": "2025-06-24T08:33:12" },
  { "title": "Madinah Book 3 Lesson 16 | Part 3 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=PC67k5Wgneo", "thumbnailUrl": "https://i.ytimg.com/vi/PC67k5Wgneo/maxresdefault.jpg", "duration": "31 Minutes, 18 Seconds", "durationSeconds": 1878, "durationMinutes": 31.3, "durationTimestamp": "31:18", "uploadedTime": "2025-07-01T08:30:26" },
  { "title": "Madinah Book 3 Lesson 17 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=CjWdXhSDikk", "thumbnailUrl": "https://i.ytimg.com/vi/CjWdXhSDikk/maxresdefault.jpg", "duration": "31 Minutes, 38 Seconds", "durationSeconds": 1898, "durationMinutes": 31.63, "durationTimestamp": "31:38", "uploadedTime": "2025-07-08T08:33:54" },
  { "title": "Madinah Book 3 Lesson 17 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=QJdx6wwTfko", "thumbnailUrl": "https://i.ytimg.com/vi/QJdx6wwTfko/maxresdefault.jpg", "duration": "29 Minutes, 24 Seconds", "durationSeconds": 1764, "durationMinutes": 29.4, "durationTimestamp": "29:24", "uploadedTime": "2025-07-15T08:19:15" },
  { "title": "Madinah Book 3 Lesson 17 | Part 3 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=FNohMwGK2cQ", "thumbnailUrl": "https://i.ytimg.com/vi/FNohMwGK2cQ/maxresdefault.jpg", "duration": "34 Minutes, 8 Seconds", "durationSeconds": 2048, "durationMinutes": 34.13, "durationTimestamp": "34:08", "uploadedTime": "2025-07-22T08:16:30" },
  { "title": "Madinah Book 3 Lesson 17 | Part 4 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=8o_TleFtx0E", "thumbnailUrl": "https://i.ytimg.com/vi/8o_TleFtx0E/maxresdefault.jpg", "duration": "50 Minutes, 56 Seconds", "durationSeconds": 3056, "durationMinutes": 50.93, "durationTimestamp": "50:56", "uploadedTime": "2025-08-19T08:57:45" },
  { "title": "Madinah Book 3 Lesson 18 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=oLD3x4PQJfc", "thumbnailUrl": "https://i.ytimg.com/vi/oLD3x4PQJfc/maxresdefault.jpg", "duration": "38 Minutes, 40 Seconds", "durationSeconds": 2320, "durationMinutes": 38.67, "durationTimestamp": "38:40", "uploadedTime": "2025-09-02T08:35:34" },
  { "title": "Madinah Book 3 Lesson 18 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=Xpgi4Diwips", "thumbnailUrl": "https://i.ytimg.com/vi/Xpgi4Diwips/maxresdefault.jpg", "duration": "46 Minutes, 19 Seconds", "durationSeconds": 2779, "durationMinutes": 46.32, "durationTimestamp": "46:19", "uploadedTime": "2025-09-09T19:25:57" },
  { "title": "Madinah Book 3 Lesson 18 | Part 3 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=Hck2JRYOAbg", "thumbnailUrl": "https://i.ytimg.com/vi/Hck2JRYOAbg/maxresdefault.jpg", "duration": "34 Minutes, 1 Seconds", "durationSeconds": 2041, "durationMinutes": 34.02, "durationTimestamp": "34:01", "uploadedTime": "2025-09-16T08:32:42" },
  { "title": "Madinah Book 3 Lesson 18 | Part 4 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=eGsMRDOuqMM", "thumbnailUrl": "https://i.ytimg.com/vi/eGsMRDOuqMM/maxresdefault.jpg", "duration": "19 Minutes, 36 Seconds", "durationSeconds": 1176, "durationMinutes": 19.6, "durationTimestamp": "19:36", "uploadedTime": "2025-09-22T20:16:02" },
  { "title": "Madinah Book 3 Lesson 18 | Part 5 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=4R5uCp4RJgQ", "thumbnailUrl": "https://i.ytimg.com/vi/4R5uCp4RJgQ/maxresdefault.jpg", "duration": "18 Minutes, 24 Seconds", "durationSeconds": 1104, "durationMinutes": 18.4, "durationTimestamp": "18:24", "uploadedTime": "2025-09-29T20:59:54" },
  { "title": "Madinah Book 3 Lesson 18 | Part 6 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=x9fAFf3wLpM", "thumbnailUrl": "https://i.ytimg.com/vi/x9fAFf3wLpM/maxresdefault.jpg", "duration": "48 Minutes, 45 Seconds", "durationSeconds": 2925, "durationMinutes": 48.75, "durationTimestamp": "48:45", "uploadedTime": "2025-10-07T09:01:33" },
  { "title": "Madinah Book 3 Lesson 19 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=PHDPKyHH7vc", "thumbnailUrl": "https://i.ytimg.com/vi/PHDPKyHH7vc/maxresdefault.jpg", "duration": "44 Minutes, 35 Seconds", "durationSeconds": 2675, "durationMinutes": 44.58, "durationTimestamp": "44:35", "uploadedTime": "2025-10-14T08:45:04" },
  { "title": "Madinah Book 3 Lesson 19 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=62sXIiSSu0w", "thumbnailUrl": "https://i.ytimg.com/vi/62sXIiSSu0w/maxresdefault.jpg", "duration": "46 Minutes, 6 Seconds", "durationSeconds": 2766, "durationMinutes": 46.1, "durationTimestamp": "46:06", "uploadedTime": "2025-10-21T09:06:51" },
  { "title": "Madinah Book 3 Lesson 19 | Part 3 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=RrJUbxEBpno", "thumbnailUrl": "https://i.ytimg.com/vi/RrJUbxEBpno/maxresdefault.jpg", "duration": "33 Minutes, 9 Seconds", "durationSeconds": 1989, "durationMinutes": 33.15, "durationTimestamp": "33:09", "uploadedTime": "2025-10-28T08:22:01" },
  { "title": "Madinah Book 3 Lesson 19 | Part 4 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=k6HZmLDA_Lo", "thumbnailUrl": "https://i.ytimg.com/vi/k6HZmLDA_Lo/maxresdefault.jpg", "duration": "11 Minutes, 25 Seconds", "durationSeconds": 685, "durationMinutes": 11.42, "durationTimestamp": "11:25", "uploadedTime": "2025-11-03T20:02:46" },
  { "title": "Madinah Book 3 Lesson 19 | Part 5 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=xYFPWBGrObo", "thumbnailUrl": "https://i.ytimg.com/vi/xYFPWBGrObo/maxresdefault.jpg", "duration": "8 Minutes, 50 Seconds", "durationSeconds": 530, "durationMinutes": 8.83, "durationTimestamp": "8:50", "uploadedTime": "2025-11-03T20:13:51" },
  { "title": "Madinah Book 3 Lesson 19 | Part 6 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=RVSAbdreZhM", "thumbnailUrl": "https://i.ytimg.com/vi/RVSAbdreZhM/maxresdefault.jpg", "duration": "37 Minutes, 49 Seconds", "durationSeconds": 2269, "durationMinutes": 37.82, "durationTimestamp": "37:49", "uploadedTime": "2025-11-25T08:45:23" },
  { "title": "Madinah Book 3 Lesson 19 | Part 7 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=rqfLYvDPIss", "thumbnailUrl": "https://i.ytimg.com/vi/rqfLYvDPIss/maxresdefault.jpg", "duration": "46 Minutes, 7 Seconds", "durationSeconds": 2767, "durationMinutes": 46.12, "durationTimestamp": "46:07", "uploadedTime": "2025-12-02T08:24:13" },
  { "title": "Madinah Book 3 Lesson 20 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=WE5uC-CQzCI", "thumbnailUrl": "https://i.ytimg.com/vi/WE5uC-CQzCI/maxresdefault.jpg", "duration": "32 Minutes, 16 Seconds", "durationSeconds": 1936, "durationMinutes": 32.27, "durationTimestamp": "32:16", "uploadedTime": "2025-12-09T08:06:15" },
  { "title": "Madinah Book 3 Lesson 20 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=87Qc2ZD0SQ0", "thumbnailUrl": "https://i.ytimg.com/vi/87Qc2ZD0SQ0/maxresdefault.jpg", "duration": "8 Minutes, 20 Seconds", "durationSeconds": 500, "durationMinutes": 8.33, "durationTimestamp": "8:20", "uploadedTime": "2025-12-15T19:26:30" },
  { "title": "Madinah Book 3 Lesson 20 | Part 2 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=iR4xWbfVY7E", "thumbnailUrl": "https://i.ytimg.com/vi/iR4xWbfVY7E/maxresdefault.jpg", "duration": "40 Minutes, 44 Seconds", "durationSeconds": 2444, "durationMinutes": 40.73, "durationTimestamp": "40:44", "uploadedTime": "2025-12-16T08:23:14" },
  { "title": "Madinah Book 3 Lesson 20 | Part 3 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=Vws19nfcY5A", "thumbnailUrl": "https://i.ytimg.com/vi/Vws19nfcY5A/maxresdefault.jpg", "duration": "42 Minutes, 49 Seconds", "durationSeconds": 2569, "durationMinutes": 42.82, "durationTimestamp": "42:49", "uploadedTime": "2025-12-23T08:24:08" },
  { "title": "Madinah Book 3 Lesson 21 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=NyubeHvV17c", "thumbnailUrl": "https://i.ytimg.com/vi/NyubeHvV17c/maxresdefault_live.jpg", "duration": "0 Second", "durationSeconds": 0, "durationMinutes": 0, "durationTimestamp": "0:00", "uploadedTime": "2025-12-29T19:29:31" },
  { "title": "Madinah Book 3 Lesson 21 | Part 1 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=zMGfy8V2m68", "thumbnailUrl": "https://i.ytimg.com/vi/zMGfy8V2m68/maxresdefault.jpg", "duration": "38 Minutes, 40 Seconds", "durationSeconds": 2320, "durationMinutes": 38.67, "durationTimestamp": "38:40", "uploadedTime": "2025-12-30T08:22:16" },
  { "title": "Madinah Book 3 | Lesson 21 Part 2  | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=czJJl2lONqI", "thumbnailUrl": "https://i.ytimg.com/vi/czJJl2lONqI/maxresdefault.jpg", "duration": "36 Minutes, 52 Seconds", "durationSeconds": 2212, "durationMinutes": 36.87, "durationTimestamp": "36:52", "uploadedTime": "2026-01-06T08:02:10" },
  { "title": "Madinah Book 3 | Lesson 21 Part 3 | Abu Kenzah Jamal", "videoUrl": "https://www.youtube.com/watch?v=LdhbUvt-V7M", "thumbnailUrl": "https://i.ytimg.com/vi/LdhbUvt-V7M/maxresdefault_live.jpg", "duration": "43 Minutes, 5 Seconds", "durationSeconds": 2585, "durationMinutes": 43.08, "durationTimestamp": "43:05", "uploadedTime": "2026-01-15T20:31:59" }
];

export interface YouTubeBook {
  number: number;
  name: string;
  videos: YouTubeVideo[];
}

export const youtubeBooks: YouTubeBook[] = [
  {
    number: 1,
    name: 'Madina Book 1 - Abu Kenzah',
    videos: book1YouTubeVideos,
  },
  {
    number: 2,
    name: 'Madina Book 2 - Abu Kenzah',
    videos: book2YouTubeVideos,
  },
  {
    number: 3,
    name: 'Madina Book 3 - Abu Kenzah',
    videos: book3YouTubeVideos,
  },
];

export function getYouTubeVideoKey(bookNumber: number, videoIndex: number): string {
  return `youtube-book${bookNumber}-video${videoIndex}`;
}
