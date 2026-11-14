# ai-portfolio

Source code of my personal portfolio page: a single-page site built with React 19, Vite 7 and Tailwind CSS 4.

I am Umair Talib, an M.Sc. Computer Science student at the University of Siegen. I work on LLM and speech systems whose results can be checked. The page shows my research, projects, skills, experience and education. Everything on it matches my CV (November 2026).

## What the page shows

| Section | Content | File |
| --- | --- | --- |
| Home | Name, headline, the three views of my master's thesis and one result from my CoDIT 2026 paper | `src/components/Hero.jsx` |
| About | Studies, research interests, master's thesis and current work | `src/components/About.jsx` |
| Skills | The skill groups from my CV | `src/components/Skills.jsx` |
| Research and Projects | Master's thesis, published paper, research project and course project | `src/components/Projects.jsx` |
| Experience & Education | Jobs, degrees and further training, newest first | `src/components/Experience.jsx` |
| Contact | What I am looking for, and my e-mail address | `src/components/Contact.jsx` |

In Skills, Research and Projects, and Experience & Education, the entries are kept in a list at the top of the file, so changing an entry does not touch the layout.

## Related links

- Master's thesis repository: [listening-beyond-the-words](https://github.com/UmairTalib/listening-beyond-the-words)
- Paper: U. Oleh, U. Talib, M. A. Alam and R. Obermaisser, "Leakage-Resilient Diarization and Feature Extraction Framework for Robust Multimodal Mental Health Corpora", CoDIT 2026, published by IEEE, pp. 2508–2512, [doi:10.1109/CoDIT70676.2026.11630977](https://doi.org/10.1109/CoDIT70676.2026.11630977)
- LinkedIn: [linkedin.com/in/umairtalib](https://www.linkedin.com/in/umairtalib/)

## Run it locally

You need Node.js 20.19 or later (or 22.12 or later), as Vite 7 requires.

```bash
npm install      # install the dependencies
npm run dev      # start the development server with hot reload
npm run lint     # check the code with ESLint
npm run build    # build the static site into dist/
npm run preview  # serve the built site locally
```

## History

The first version of this repository (December 2025) held placeholder content that did not describe me: a sample degree, a sample job and sample projects. In November 2026 I replaced it with my own content.
