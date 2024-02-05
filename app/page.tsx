"use client";
import Header from "@/collections/Header";
import Menu from "@/collections/Menu";
import styles from "./page.module.css";
import Footer from "@/collections/Footer";
import Card from "@/collections/Card";
import Slider from "@/collections/Slider";
import { useScreenDimensions } from "@/hooks/useScreenDimension";

export default function Home() {
  const [width] = useScreenDimensions();

  return (
    <>
      <div className={styles.stickyHeader}>
        <Header />
        <Menu
          items={[
            {
              text: "Stock Video",
              subItems: ["Stock Footage", "Motion Graphics"],
            },
            {
              text: "Video Templates",
              subItems: [
                "After Effects",
                "Premier Pro",
                "Apple Motion",
                "Final Cut Pro",
              ],
            },
            {
              text: "Music",
              subItems: ["Royalty Free Music", "Logos & Idents"],
            },
            {
              text: "Sound Effects",
              subItems: [
                "Game Sounds",
                "Transitions & Movement",
                "Domestic Sounds",
                "Human Sounds",
                "Urban Sounds",
                "Nature Sounds",
              ],
            },
            {
              text: "Graphic Templates",
              subItems: [
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Adove InDesign",
                "Adove XD",
                "Figma",
                "Sketch",
              ],
            },
            {
              text: "Grapics",
              subItems: [
                "Backgrounds",
                "Textures",
                "Social",
                "Patterns",
                "Icons",
                "Objects",
              ],
            },
            {
              text: "Presentation Templates",
              subItems: ["Keynote", "PowerPoint", "Google Slides"],
            },
            { text: "Photos" },
            {
              text: "Fonts",
              subItems: [
                "Serif",
                "Sans Serif",
                "Script and Handwritten",
                "Decorative",
              ],
            },
            {
              text: "Add-ons",
              subItems: [
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Adove InDesign",
                "Procreate",
              ],
            },
            {
              text: "Web Templates",
              subItems: [
                "Admin Templates",
                "Email Templates",
                "Site Templates",
                "Landing Page Templates",
              ],
            },
            {
              text: "CMS Templates",
              subItems: ["Drupal", "Joomla", "Magnato"],
            },
            {
              text: "Wordpress",
              subItems: ["Drupal", "Joomla", "Magnato"],
            },
            {
              text: "3D",
              subItems: ["Drupal", "Joomla", "Magnato"],
            },
            {
              text: "Free Flies",
              subItems: ["Drupal", "Joomla", "Magnato"],
            },
            {
              text: "Extensions",
              subItems: ["Drupal", "Joomla", "Magnato"],
            },
          ]}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Your Bookmarks</h1>
          <div className={styles.bookmarks}>
            {BookmarksList.map((item, i) => {
              return (
                <Card
                  key={i}
                  description={item.description}
                  title={item.title}
                  icon={item.icon}
                />
              );
            })}
          </div>
          <h1 className={styles.heading}>Convert from PDF</h1>
          <Slider
            displayCount={
              width > 1400 ? 5 : width > 1024 ? 4 : width > 768 ? 3 : 2
            }
            items={[...ConvertFromPDFList].map((item, i) => {
              return (
                <Card
                  key={i}
                  description={item.description}
                  title={item.title}
                  icon={item.icon}
                />
              );
            })}
          />
          <h1 className={styles.heading}>Convert from PDF</h1>
          <div className={styles.bookmarks}>
            {[...ConvertFromPDFList].splice(0, 4).map((item, i) => {
              return (
                <Card
                  key={i}
                  description={item.description}
                  title={item.title}
                  icon={item.icon}
                />
              );
            })}
          </div>
          <h1 className={styles.heading}>Convert to PDF</h1>
          <div className={styles.bookmarks}>
            {ConvertToPDFList.map((item, i) => {
              return (
                <Card
                  key={i}
                  description={item.description}
                  title={item.title}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
const BookmarksList = [
  {
    title: "Edit PDF",
    description: "Use the best online tool to edit PDFs in your browser.",
    icon: "icons/edit.svg",
  },
  {
    title: "Crop PDF",
    description:
      "Crop PDF online to a selected area, and adjust margin size swiftly",
    icon: "icons/crop.svg",
  },
  {
    title: "Replace Text",
    description: "The esiest way to replace text online.",
    icon: "icons/replace.svg",
  },
  {
    title: "Rotate PDF",
    description: "Rotate and save your PDF pages online for free",
    icon: "icons/rotate.svg",
  },
];
const ConvertFromPDFList = [
  {
    title: "PDF to Word",
    description: "Easily Convert PDF to Word document.",
    icon: "icons/pdftoword.svg",
  },
  {
    title: "PDF to PPT",
    description: "Convert PDF to Powerpoint online.",
    icon: "icons/pdftoppt.svg",
  },
  {
    title: "PDF to Excel",
    description: "Convert PDF to xls for free.",
    icon: "icons/pdftoexcel.svg",
  },
  {
    title: "PDF to JPG",
    description:
      "Convert PDF files to a set of optimized JPG, PNG, BMP, GIF or TIFF images.",
    icon: "icons/pdftojpg.svg",
  },
  {
    title: "PDF to TXT",
    description: "Convert your PDF to TXT, and extract text from your PDF.",
    icon: "icons/pdftotext.svg",
  },
  {
    title: "PDF to RTF",
    description: "Convert PDF to RTF online and free.",
    icon: "icons/pdftortf.svg",
  },
  {
    title: "PDF to Pages",
    description: "Convert pdf to Pages on Mac and Windows.",
    icon: "icons/pdftopages.svg",
  },
  {
    title: "PDF to HTML",
    description: "Convert your PDF documents to HTML web page.",
    icon: "icons/pdftohtml.svg",
  },
];
const ConvertToPDFList = [
  {
    title: "Word to PDF",
    description: "Easily Convert PDF to Word document.",
    icon: "icons/pdftoword.svg",
  },
  {
    title: "PPT to PDF",
    description: "Convert PDF to Powerpoint online.",
    icon: "icons/pdftoppt.svg",
  },
  {
    title: "Excel to PDF",
    description: "Convert PDF to xls for free.",
    icon: "icons/pdftoexcel.svg",
  },
  {
    title: "JPG to PDF",
    description:
      "Convert PDF files to a set of optimized JPG, PNG, BMP, GIF or TIFF images.",
    icon: "icons/pdftojpg.svg",
  },
];
