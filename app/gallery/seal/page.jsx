"use client";
import React from "react";
import Zoom from "react-medium-image-zoom";
import { topBtnVariant } from "../../../utils/animationVariations";
import { motion } from "framer-motion";
import "react-medium-image-zoom/dist/styles.css";

export default function PaintCorrectionGallery() {
  return (
    <section className="gallery-content-container text-center">
      <div
        className="cover"
        style={{
          backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/dcfb9b5c-1867-4678-8ae3-2d88d1286300/cover')`
        }}
      ></div>
      <div className="servicepage-header" style={{ transform: "translate(7%, 10vh)" }}>
        <div style={{ alignItems: "center" }}>
          <h1>
            <span className="accent-orange bold text-shadow">Exterior Seal & Shine Gallery</span>
          </h1>
          <strong className="page-subheading" style={{ textAlign: "center" }}>
            Check out the gallery below to see just what we are able to do with a simple polish and ceramic spray. Take a look at our{" "}
            <a href="/services/exterior-seal" className="aside-link">
              Exterior Seal & Shine
            </a>{" "}
            page for more details and pricing.
          </strong>
          <div className="header-buttons">
            <motion.a href="/contact" className="top-quote-btn" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              <img src="../assets/icons/clipboard.png" alt="clipboard" className="btn-icon" /> Book Now!
            </motion.a>
            <motion.a href="tel:2532529758" className="top-quote-btn btn-secondary" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
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
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a090ad9b-c164-465e-2afc-a07233347e00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card card-tall"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/9e4d290e-ad89-4cc9-1f10-a1d37790cb00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card card-tall"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/25b95e2a-4285-4234-6e96-22b6a21ff600/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card card-tall"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e234f506-abd5-498a-eecb-3250d8774200/public')`
            }}
          ></div>
        </Zoom>
      </div>

      <br className="extra-space" />

      <h2 className="text-large text-white">
        More Images from our <span className="accent-orange">Seal & Shine</span> Service
      </h2>
      <div className="mini-grid">
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6d036031-7cf2-4d62-e7ee-adb974278700/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a60a19f8-a7b7-451a-bddb-840b8db55400/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/53a2db64-7e49-42eb-d7e4-efdf9d9d8000/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a205f097-f145-41b5-8af5-98a046dca700/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4902c054-2665-4cc3-47f3-2daf90df3a00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a88a5723-312c-4d9f-7e44-6751373ccc00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a5c84dc1-4fb3-46cb-ccac-26c71778a900/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3f7c3a25-9e62-4b00-c38d-4a1bbc201200/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1e3ad3ed-f7bb-4bea-b301-762a80f19500/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7ace7ab9-4738-4721-9236-01acfd057d00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c6e06a3c-a096-4aa2-3ae1-ddcc3ce50c00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a1962dba-9065-4a4e-9c99-792960ba5f00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/34b91db0-1f06-44b7-1f36-b98829be4e00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/70318572-a572-4d6d-6f22-c87738a73200/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0f81bf7d-ecd3-449a-9c08-6a6de2e02b00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/664d5e53-078b-4287-79bf-8b338a7c1a00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d5f50629-973c-44a8-41d9-a1941fc76900/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/617c2306-0477-4472-158e-ebac9c69c000/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/497419b7-6e10-4d93-5058-81b0f5486300/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ff2d836c-23d3-43fe-4f5c-844e5fb2a100/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/cc95aa3e-1929-4d99-78bc-583580a89100/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e0bc4e5e-badc-4071-2a44-412176884000/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b7d49e2e-6842-4692-357e-425dbe256b00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1be4ef5c-0d45-45f9-fb68-33007a4cc800/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/458ad194-2252-4358-102b-22a1f617c800/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6f6241d1-67d2-44c9-f7b3-0316b40e8300/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/42bf45ce-c76d-4614-817b-7f4b5a55b200/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2e52fbef-fad5-4867-9c02-157690455900/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/467a2ab2-0caa-4706-8b63-120071b56c00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/05a03dc9-11c9-4ad8-a8a3-eba28b243e00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a0dc636c-2a04-40fa-e44d-b0ec1ee8ff00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/816ccafc-084b-4d7d-8735-8da8117a4700/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4b286353-ec88-4c47-225f-5890ed674000/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4ea59c3f-faed-4122-6272-d745b3d8f500/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/496eb30e-6570-4f26-b064-a429810b0000/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/71b45ced-4b79-48a8-9845-dea5ba8f6c00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2baaebc2-6e27-4208-ea80-4b15fe2f6100/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/92c7813e-8161-4fcf-7c62-b3c8bd51c900/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3f166cc1-5fd9-4249-7a3c-8ec865325600/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/68b2a2c9-3226-45ec-a85f-b723f7fac300/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/22039636-a6ef-4ea7-f9c0-12beaeb19900/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/807bb532-5e08-48ef-61d7-7b3392f2ae00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/97de70f3-6df4-418f-5cff-00e50f13fa00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fbae254b-fd19-4fb9-2af7-7fa74e753c00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/866e79da-8dc8-400c-10f2-3d4dd1fd9300/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1163f3de-fabf-47ec-35a1-1a4413531d00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/8c43191b-63d3-4ced-d7d8-c6fa96f37100/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2b626e03-afc9-4f70-1223-5c5bf6d6a300/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eae0cc31-00b4-4fef-07e3-6dedd1b89200/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/9ad6bfa1-52e8-4349-db4c-646a0a51f000/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/08914f28-3d2e-421e-c846-8f15062e0000/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/32930152-a55c-4325-49cb-e25a40fbeb00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5fabb5ba-d12e-4e8a-c3bb-f5901af53e00/public')`
            }}
          ></div>
        </Zoom>
        <Zoom>
          <div
            className="card"
            role="img"
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f7c127be-d17d-4563-48c3-809289e8bc00/public')`
            }}
          ></div>
        </Zoom>
      </div>
      <strong className="text-white text-3xl lg:text-4xl max-w-90% lg:max-w-[60%] mx-auto my-8">
        To see more about the services pictured above be sure to check out our{" "}
        <a href="/services/exterior-seal" className="aside-link">
          Exterior Seal & Shine
        </a>{" "}
        page for more details!
      </strong>
    </section>
  );
}
