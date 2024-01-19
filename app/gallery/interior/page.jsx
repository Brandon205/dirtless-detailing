"use client";
import React from "react";
import Zoom from "react-medium-image-zoom";
import { topBtnVariant } from "../../../utils/animationVariations";
import { motion } from "framer-motion";
import "react-medium-image-zoom/dist/styles.css";

export default function FullIntGallery() {
  return (
    <section className="gallery-content-container">
      {/* <Head>
        <title>Full Interior Gallery | Dirt-Less Detailing</title>
        <Metatags
          title="Full Interior Gallery | Dirt-Less Detailing"
          description="Our Full Interior Gallery shows off some of our hard work cleaning vehicle interiors. We've cleaned everything from spilled drinks to crumbs everywhere!"
          image="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/213e3fa9-1def-44b2-3031-1901432b9a00/public"
          canonical="/gallery/interior"
        />
      </Head> */}
      <div
        className="cover"
        style={{
          backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/213e3fa9-1def-44b2-3031-1901432b9a00/cover')`,
        }}
      ></div>
      <div className="servicepage-header" style={{ transform: "translate(7%, 10vh)" }}>
        <div style={{ alignItems: "center" }}>
          <h1>
            <span className="accent-orange bold text-shadow">Full Interior Cleaning Gallery</span>
          </h1>
          <h2 className="page-subheading" style={{ textAlign: "center" }}>
            We have cleaned it all, even the worst of interiors. Check out the Gallery below. Take a look at our{" "}
            <a href="/services/interior" className="aside-link">
              Full Interior
            </a>{" "}
            page to find out more.
          </h2>
          <div className="header-buttons">
            <motion.a
              href="/contact"
              className="top-quote-btn"
              variants={topBtnVariant}
              whileHover="hover"
              transition={{ duration: 0.25 }}
            >
              <img src="../assets/icons/clipboard.png" alt="clipboard" className="btn-icon" /> Book Now!
            </motion.a>
            <motion.a
              href="tel:2532529758"
              className="top-quote-btn btn-secondary"
              variants={topBtnVariant}
              whileHover="hover"
              transition={{ duration: 0.25 }}
            >
              <img src="../assets/icons/phoneMessage.png" alt="call or message" className="btn-icon" /> (253) 252-9758
            </motion.a>
          </div>
        </div>
      </div>

      <br className="extra-space" />
      <div className="mini-grid">
        <Zoom>
          <div
            className="card card-tall"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7e7cbef8-df97-4821-1aa4-13dd0f99d400/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card card-tall"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/be771e29-71fe-47b0-8fa3-0419d7991800/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card card-tall"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/377058f9-ccde-4c74-8ad8-e969d0d7cb00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card card-tall"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5c4c38ce-70eb-4e06-8e57-b567b6852600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card card-tall"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7e7f0840-f8da-413d-8ffc-d860260b8500/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card card-tall"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/35529183-852b-444d-21f7-e115fd2f7a00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card card-tall"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fc07a7ff-a339-48b8-cda9-b7dd7f0d5900/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card card-tall"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c9eb4d1f-d3d1-4865-875f-2f569520e700/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card card-tall"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/400ec429-66ab-4dec-e992-a60d6d5d4b00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card card-tall"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/00cf8ed5-c134-4532-5f8c-356bc06caf00/public')`,
            }}
          ></div>
        </Zoom>
      </div>

      <br className="extra-space" />

      <h2 className="text-large text-white">
        More images from our <span className="accent-orange">Full Interior</span> and{" "}
        <span className="accent-orange">Full Interior + Spill Guard</span> Services
      </h2>
      <div className="mini-grid">
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/07c0720a-4281-4c16-bfb7-01fcc942d100/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/878bae8f-0568-46c7-ba04-9a1025e24300/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f6e423a1-7430-40bc-9e61-2c93a8c9f100/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ad04f4a7-5cd7-46d0-3e28-7ee3fcca3600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/51fc9067-bfd8-4054-0f6d-211f4588ab00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/bdddb349-bb42-435d-8569-a09a86bc6e00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0e2bc8e9-28e8-4888-200b-86674d466600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/9038e5ae-12d5-4c44-8c4d-b0e623445c00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d5c737da-3f78-4687-a8c6-0939b9abd200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/97a74dcb-db58-432b-8ebc-6a5ced081a00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b56f7802-96d8-4ca3-25cd-adab650fa900/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/aae87b8b-8bc3-4b7b-76a9-928793cc0d00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/bf049468-88ea-4f95-6423-9053a8ed1600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/8309ef53-5050-4104-f435-d77c2ecc9d00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e9ff874e-23a2-43b0-cc8b-455126d20d00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2e80678b-26bd-4943-13c4-686560fbe600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5cba81f3-c606-430c-4d2b-4b90409ed600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/321f9f72-1afc-4b18-b617-a003be5e1900/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/18e87e51-282c-4e06-125e-d3c971501b00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3d5f596f-324b-4ad6-e6a8-1157387d2400/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/90d1595d-7de3-4b16-7a80-b83054ee2600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3156082a-57cf-4162-4438-0798ed22c200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ca98f257-8727-4688-56fa-56fffe647200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e7d160ba-aac9-46f5-985d-1a9dc5d0d600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4c1641c6-5da3-4bc4-6962-92a721a24300/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e2d544ec-b25c-4d22-53c2-bdf651767200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/cf3f9ae6-55af-4cca-b900-9b89f4a6d500/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7e9aa1a7-5196-4e41-6964-6432a26a0100/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b54222ca-1f18-4dfb-f3e0-c05b5b60f700/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/859c0c50-2059-4227-baf4-dde999542900/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/88ee645a-0516-4f7f-cff7-9114dfae4b00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/aade7fe2-d81c-4131-5978-10e953999900/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/08298e63-cf80-4b27-f7d7-321d5ab0b800/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5501296d-6d8e-4c86-427a-ee7e9a5b9a00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/956056d5-9bf8-4664-6ec9-07adfb96bb00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0f0c9aab-0fdf-4aed-33a5-d234c3313200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b455472a-c680-4940-1187-45cd07808800/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/8c5f01ca-9fdb-4017-dd06-30ed8bdb3000/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5339d4e0-c0da-411d-ada4-40ae272bdc00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/83093316-8854-44af-bc72-b576eb20e500/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b646a152-1442-431e-4018-d6d8d3da1c00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2688a1b7-c216-4706-ef8c-f7e94598c800/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/70d39a9b-1878-47bb-a7f1-1afe97ae0300/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/428d277c-236a-4423-c928-873fe740eb00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7ef8206f-ee9c-41fa-f463-1d6dd195a000/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/01f14347-831e-48fe-c0a1-667b8640b600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ae76f79a-0436-4879-60f2-864ea1d64d00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e5805317-82a1-4fdf-d5ad-6457055af600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7751e33e-1816-4edb-63cf-603f8e879b00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/57b680a7-cd5e-40c1-312b-ef54b4bef800/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/9b9c4f43-bef5-4516-78cf-9fa978743100/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/07ea2f2e-5908-49b9-21d6-216bad2f8b00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/316f379c-f901-40ed-9b4d-a08ad511ec00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d53160a4-4b11-4453-682f-f16a0af2b500/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ab439285-4eb3-4b4e-c528-d57796eb3600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d5ee9b0b-e86d-4e88-c3cd-a254834c2200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b36b25e0-3f4f-41e9-75ce-5f1245ec6500/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5bec9244-aa72-4696-7cc5-b67c1c05cd00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/03f259d7-5b1e-45bb-d3e1-506b55a8e500/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/13b2a957-6d5f-43b1-e41c-c4fcd2242100/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/725899d6-0401-4ab8-1b6b-fd46eefcad00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/728d4dfa-0636-4fe7-d4ef-f0cafa4de000/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5ae3b1a4-f3b0-4c19-23d3-6183c0fb5200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/cbb90c5b-566b-4df2-a0f6-fc25f6dbe900/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/61e6b6d5-7088-49f0-ca9c-30d03fc59000/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1d9fa3c0-9cda-40f6-9c81-8b1d231a8900/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e87046e0-064b-4bc3-1b0a-b45c5c72ad00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d83defe9-6419-4ae2-e777-4dd6e57e7000/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/26aa8532-5746-4ffd-5c6f-c8bea4d4e200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/22119e06-9793-41ca-984d-9ef85b303200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7ccbfc8c-7794-4443-932d-3baed2dc7100/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b1d716fa-888e-48a1-148d-e2cd896b8500/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7806872c-2bd3-4842-dd28-a3be7e7b6f00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1d16bd9b-f469-4f88-59e9-be07fbcca500/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/9f2716bf-c9c4-4928-b7c8-44fcac34b900/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f6170666-70f6-487c-4db8-26125453df00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c8481cf3-2e19-45fb-75ff-8aee5170ec00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e073e12e-8f0c-4ae5-fa12-4abc9ab9db00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/359efaa7-2f66-4e21-0268-8fa9c563dd00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fff2cfea-04fc-445b-5e67-d2a2eb2a2000/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/87c1d839-0adb-4a84-de56-5fd4766c9300/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1e5cf875-715e-448e-12a3-d32ca03be200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b70546cc-41ce-4c96-e5bf-58e319c87800/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/39671136-9fff-42d8-754e-fe9ff631ba00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/54e8c34d-7dc3-47d7-dc62-ffe10f305200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a40931e-dd21-407c-dd03-86fd43b05200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7a8e321a-6a57-41ea-9736-7bd4849bcf00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c537680c-f103-4032-65e3-11370c73d300/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6d1c1456-97c0-4c35-d58a-ed3c0d576a00/public')`,
            }}
          ></div>
        </Zoom>
      </div>
      <h2 style={{ color: "white" }}>
        Check out our{" "}
        <a href="/services/interior" className="aside-link">
          Full Interior Cleaning
        </a>{" "}
        page or our{" "}
        <a href="/services/interior-spill" className="aside-link">
          Full Interior + Spill Guard{" "}
        </a>{" "}
        page for more details!
      </h2>
    </section>
  );
}
