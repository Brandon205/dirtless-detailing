"use client";
import React from "react";
import Zoom from "react-medium-image-zoom";
import { topBtnVariant } from "@/utils/animationVariations";
import { motion } from "framer-motion";
import "react-medium-image-zoom/dist/styles.css";

export default function CoatingGallery() {
  return (
    <section className="gallery-content-container">
      <div
        className="cover"
        style={{
          backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2bd5c3dd-6677-466a-e348-8495945c4700/cover')`,
        }}
      ></div>
      <div className="servicepage-header" style={{ transform: "translate(7%, 10vh)" }}>
        <div style={{ alignItems: "center" }}>
          <h1>
            <span className="accent-orange bold text-shadow">Exterior Correct & Protect Gallery</span>
          </h1>
          <h2 className="page-subheading" style={{ textAlign: "center" }}>
            Check out the gallery below to see the results and capabilities of a freshly applied Ceramic Coating. Take a
            look at our{" "}
            <a href="/services/exterior-correct" className="aside-link">
              Exterior Correct & Protect
            </a>{" "}
            page to learn more about this service!
          </h2>
          <div className="header-buttons">
            <motion.a
              href="/contact"
              className="top-quote-btn"
              variants={topBtnVariant}
              whileHover="hover"
              transition={{ duration: 0.25 }}
            >
              <img src="../assets/icons/clipboard.png" alt="clipboard" className="btn-icon" /> Get a Free Quote
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
            className="card card-wide"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a8430f3-90c0-4f56-1fff-88fcd3b29600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card card-wide"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/04cc5cf0-3dc1-404f-b9c5-9981825e2e00/public')`,
            }}
          ></div>
        </Zoom>
      </div>

      <br className="extra-space" />

      <h2 className="text-large text-white">
        More images from our <span className="accent-orange">Correct & Protect</span> service.
      </h2>
      <div style={{ marginTop: "1rem" }} className="mini-grid">
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7cc8a20-819f-4ef2-8b36-d41dc99bc200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/535a82f6-dd2b-450c-99fc-1bedd61bf700/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/568455f2-1e76-41bd-3ab9-7dcb5c7e2500/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/29a47701-c7df-4637-bbf3-44adad7a3000/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/84a0827d-9311-458e-dc03-f5f300669d00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4ce4f977-365c-4211-a7f9-68c5ec6d7a00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2bd5c3dd-6677-466a-e348-8495945c4700/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1b374b94-cfcc-446e-e205-3d1d348cb100/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6c5f6480-a2e8-4968-85c4-4f9d6cbf3400/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7b4af9c-97db-42dc-3b72-452a6221aa00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/977438a8-129b-496b-9845-e55e3198e900/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/318b00ed-4a02-4f43-7fdb-1d407d7b0100/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/8c1574b9-7517-4c50-6b36-133352ab0a00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5b0798e5-2648-4845-168b-98e7ff013100/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fdce3625-66ac-4ea8-68e5-9f2e9e94c500/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/74e3cbf9-f5d7-458f-14c3-5367bc903e00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ab68bfcc-17a0-4468-539b-fded52edc500/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/92eba802-0109-4a56-f3ae-cd929116ea00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eef9854b-8f53-4f66-fa7f-d7c97fc71e00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/45779246-97c3-4442-85d6-be09aabad900/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eae5ca9b-08ef-42e8-494a-6af297615e00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c36a4199-45b3-43d4-9c24-0493603b8f00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/90b30e78-2aa7-4451-936f-acf21580bd00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3c484dfb-5247-428e-1735-1b31f3efd600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a4a318e1-fd6c-4f89-7539-55b66a2d6200/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d3d11e10-2cbe-4454-9a36-fbc43dea7800/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/43a02c30-4982-435d-7f91-6d81fd11a000/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6feedf70-363e-4a11-8e18-185c9d984600/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fdaa6115-35ea-45f4-e7f2-acec67e40a00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e30050eb-d6a4-45c9-bb0c-c5070cd86700/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/171029c2-9bcd-46da-fa7d-b45f5e6e9800/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/48ede291-7184-49d8-d6b4-cee59b767c00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/611a9397-5a44-416d-03f6-491aae2bde00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c8855b02-88e3-47c6-f8ab-835cead38f00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/dd8a4ba8-beaa-4361-cbc9-f50e9bda3f00/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e0f2ecbc-7591-4ec8-534c-28b3261ec700/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0debc625-8006-4be7-1ae8-4fe3d43ae700/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a5260bdd-11e9-4e31-74ec-c1d75787e000/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b441cde-1d0f-45d9-665f-e44bfce0d800/public')`,
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a196c77-cb1a-42f9-479b-8fdbe3c14500/public')`,
            }}
          ></div>
        </Zoom>
      </div>
      <h2 style={{ color: "white" }}>
        Check out our{" "}
        <a href="/services/exterior-correct" className="aside-link">
          Correct & Protect
        </a>{" "}
        page for more details!
      </h2>
    </section>
  );
}
