export interface VideoPart {
  name: string;
  url: string;
}

export interface DVD {
  number: number;
  parts: {
    [key: string]: VideoPart[];
  };
}

export interface Book {
  number: number;
  name: string;
  dvds: DVD[];
}

// Helper function to create video URL
function createVideoUrl(book: number, dvd: number, part: string): string {
  const dvdStr = String(dvd).padStart(2, '0');
  // Some DVDs have a dash at the end in the folder name (Book1Dvd01-)
  const folderSuffix = (book === 1 && dvd <= 3) ? '-' : '';
  return `http://www.archive.org/download/ArabicLanguageCourseVideos-Mpeg4-hi-res-Book${book}Dvd${dvdStr}${folderSuffix}/MAV_BK${book}_DVD${dvdStr}_${part}_512kb.mp4`;
}

// Book 1 Data
const book1DVDs: DVD[] = [
  {
    number: 1,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(1, 1, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(1, 1, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(1, 1, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(1, 1, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(1, 1, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(1, 1, 'PARTB3') },
      ],
    },
  },
  {
    number: 2,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(1, 2, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(1, 2, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(1, 2, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(1, 2, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(1, 2, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(1, 2, 'PARTB3') },
      ],
    },
  },
  {
    number: 3,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(1, 3, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(1, 3, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(1, 3, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(1, 3, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(1, 3, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(1, 3, 'PARTB3') },
      ],
    },
  },
  {
    number: 4,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(1, 4, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(1, 4, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(1, 4, 'PARTA3') },
        { name: 'Part A4', url: 'http://www.archive.org/download/ArabicLanguageCourseVideos-Mpeg4-hi-res-Book1Dvd04/MAV_BK1_DVD04_PARTAS_512kb.mp4' },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(1, 4, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(1, 4, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(1, 4, 'PARTB3') },
      ],
    },
  },
  {
    number: 5,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(1, 5, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(1, 5, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(1, 5, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(1, 5, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(1, 5, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(1, 5, 'PARTB3') },
      ],
    },
  },
  {
    number: 6,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(1, 6, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(1, 6, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(1, 6, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(1, 6, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(1, 6, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(1, 6, 'PARTB3') },
      ],
    },
  },
  {
    number: 7,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(1, 7, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(1, 7, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(1, 7, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(1, 7, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(1, 7, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(1, 7, 'PARTB3') },
      ],
    },
  },
  {
    number: 8,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(1, 8, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(1, 8, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(1, 8, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(1, 8, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(1, 8, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(1, 8, 'PARTB3') },
      ],
    },
  },
  {
    number: 9,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(1, 9, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(1, 9, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(1, 9, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(1, 9, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(1, 9, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(1, 9, 'PARTB3') },
        { name: 'Part B4', url: createVideoUrl(1, 9, 'PARTB4') },
      ],
    },
  },
];

// Book 2 Data
const book2DVDs: DVD[] = [
  {
    number: 1,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 1, 'PARTA1') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 1, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 1, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 1, 'PARTB3') },
      ],
    },
  },
  {
    number: 2,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 2, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 2, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 2, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 2, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 2, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 2, 'PARTB3') },
      ],
    },
  },
  {
    number: 3,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 3, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 3, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 3, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 3, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 3, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 3, 'PARTB3') },
      ],
    },
  },
  {
    number: 4,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 4, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 4, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 4, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 4, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 4, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 4, 'PARTB3') },
      ],
    },
  },
  {
    number: 5,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 5, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 5, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 5, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 5, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 5, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 5, 'PARTB3') },
      ],
    },
  },
  {
    number: 6,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 6, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 6, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 6, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 6, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 6, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 6, 'PARTB3') },
      ],
    },
  },
  {
    number: 7,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 7, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 7, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 7, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 7, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 7, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 7, 'PARTB3') },
        { name: 'Part B4', url: createVideoUrl(2, 7, 'PARTB4') },
      ],
    },
  },
  {
    number: 8,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 8, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 8, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 8, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 8, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 8, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 8, 'PARTB3') },
      ],
    },
  },
  {
    number: 9,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 9, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 9, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 9, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 9, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 9, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 9, 'PARTB3') },
      ],
    },
  },
  {
    number: 10,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 10, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 10, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 10, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 10, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 10, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 10, 'PARTB3') },
      ],
    },
  },
  {
    number: 11,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 11, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 11, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 11, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 11, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 11, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 11, 'PARTB3') },
      ],
    },
  },
  {
    number: 12,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 12, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 12, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 12, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 12, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 12, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 12, 'PARTB3') },
      ],
    },
  },
  {
    number: 13,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 13, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 13, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 13, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 13, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 13, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 13, 'PARTB3') },
      ],
    },
  },
  {
    number: 14,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 14, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 14, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 14, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 14, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 14, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 14, 'PARTB3') },
      ],
    },
  },
  {
    number: 15,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 15, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 15, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 15, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 15, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 15, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 15, 'PARTB3') },
      ],
    },
  },
  {
    number: 16,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(2, 16, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(2, 16, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(2, 16, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(2, 16, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(2, 16, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(2, 16, 'PARTB3') },
      ],
    },
  },
];

// Book 3 Data
const book3DVDs: DVD[] = [
  {
    number: 1,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 1, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 1, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 1, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 1, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 1, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 1, 'PARTB3') },
      ],
    },
  },
  {
    number: 2,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 2, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 2, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 2, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 2, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 2, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 2, 'PARTB3') },
      ],
    },
  },
  {
    number: 3,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 3, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 3, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 3, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 3, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 3, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 3, 'PARTB3') },
      ],
    },
  },
  {
    number: 4,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 4, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 4, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 4, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 4, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 4, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 4, 'PARTB3') },
      ],
    },
  },
  {
    number: 5,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 5, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 5, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 5, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 5, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 5, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 5, 'PARTB3') },
      ],
    },
  },
  {
    number: 6,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 6, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 6, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 6, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 6, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 6, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 6, 'PARTB3') },
        { name: 'Part B4', url: createVideoUrl(3, 6, 'PARTB4') },
      ],
    },
  },
  {
    number: 7,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 7, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 7, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 7, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 7, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 7, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 7, 'PARTB3') },
      ],
    },
  },
  {
    number: 8,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 8, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 8, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 8, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 8, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 8, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 8, 'PARTB3') },
      ],
    },
  },
  {
    number: 9,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 9, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 9, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 9, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 9, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 9, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 9, 'PARTB3') },
      ],
    },
  },
  {
    number: 10,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 10, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 10, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 10, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 10, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 10, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 10, 'PARTB3') },
      ],
    },
  },
  {
    number: 11,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 11, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 11, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 11, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 11, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 11, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 11, 'PARTB3') },
      ],
    },
  },
  {
    number: 12,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 12, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 12, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 12, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 12, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 12, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 12, 'PARTB3') },
      ],
    },
  },
  {
    number: 13,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 13, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 13, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 13, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 13, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 13, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 13, 'PARTB3') },
      ],
    },
  },
  {
    number: 14,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 14, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 14, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 14, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 14, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 14, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 14, 'PARTB3') },
      ],
    },
  },
  {
    number: 15,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 15, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 15, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 15, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 15, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 15, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 15, 'PARTB3') },
      ],
    },
  },
  {
    number: 16,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 16, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 16, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 16, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 16, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 16, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 16, 'PARTB3') },
      ],
    },
  },
  {
    number: 17,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 17, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 17, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 17, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 17, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 17, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 17, 'PARTB3') },
      ],
    },
  },
  {
    number: 18,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 18, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 18, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 18, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 18, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 18, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 18, 'PARTB3') },
      ],
    },
  },
  {
    number: 19,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 19, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 19, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 19, 'PARTA3') },
        { name: 'Part A4', url: createVideoUrl(3, 19, 'PARTA4') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 19, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 19, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 19, 'PARTB3') },
      ],
    },
  },
  {
    number: 20,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 20, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 20, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 20, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 20, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 20, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 20, 'PARTB3') },
      ],
    },
  },
  {
    number: 21,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 21, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 21, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 21, 'PARTA3') },
        { name: 'Part A4', url: createVideoUrl(3, 21, 'PARTA4') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 21, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 21, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 21, 'PARTB3') },
        { name: 'Part B4', url: createVideoUrl(3, 21, 'PARTB4') },
      ],
    },
  },
  {
    number: 22,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 22, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 22, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 22, 'PARTA3') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 22, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 22, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 22, 'PARTB3') },
        { name: 'Part B4', url: createVideoUrl(3, 22, 'PARTB4') },
      ],
    },
  },
  {
    number: 23,
    parts: {
      A: [
        { name: 'Part A1', url: createVideoUrl(3, 23, 'PARTA1') },
        { name: 'Part A2', url: createVideoUrl(3, 23, 'PARTA2') },
        { name: 'Part A3', url: createVideoUrl(3, 23, 'PARTA3') },
        { name: 'Part A4', url: createVideoUrl(3, 23, 'PARTA4') },
      ],
      B: [
        { name: 'Part B1', url: createVideoUrl(3, 23, 'PARTB1') },
        { name: 'Part B2', url: createVideoUrl(3, 23, 'PARTB2') },
        { name: 'Part B3', url: createVideoUrl(3, 23, 'PARTB3') },
        { name: 'Part B4', url: createVideoUrl(3, 23, 'PARTB4') },
      ],
    },
  },
];

export const books: Book[] = [
  {
    number: 1,
    name: 'Madina Book 1',
    dvds: book1DVDs,
  },
  {
    number: 2,
    name: 'Madina Book 2',
    dvds: book2DVDs,
  },
  {
    number: 3,
    name: 'Madina Book 3',
    dvds: book3DVDs,
  },
];

export function getVideoKey(bookNumber: number, dvdNumber: number, partType: string, partIndex: number): string {
  return `book${bookNumber}-dvd${dvdNumber}-${partType}-${partIndex}`;
}
