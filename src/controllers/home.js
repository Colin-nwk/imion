import { getData } from "../services/getData.js";
import { contactForm, contactInfo } from "../data/contactForm.js";

export const home = async (req, res) => {
  try {
    const data = await getData();
    res.render("../src/views/pages/index.ejs", {
      pageTitle: "Home",
      ...data,
      contactForm,
      contactInfo,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

export const about = async (req, res) => {
  try {
    const { aboutTopContent, InfoContent } = await getData();
    res.render("../src/views/pages/about.ejs", {
      pageTitle: "About Us",
      aboutTopContent,
      InfoContent,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

export const gallery = async (req, res) => {
  try {
    const data = await getData();
    res.render("../src/views/pages/gallery.ejs", {
      pageTitle: "Gallery",
      data,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

export const contact = async (req, res) => {
  try {
    const data = await getData();
    res.render("../src/views/pages/contact.ejs", {
      pageTitle: "Contact",
      ...data,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
