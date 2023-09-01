"use client";
import React from "react";
import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./_sections";
import Nav from "./_components/Nav";

function NikePage() {
  return (
    <main className="relative">
      <Nav />
      <section className="pl-8 pr-8 pb-12 xl:sm:pl-16 wide:sm:pr-16 sm:pb-24 ">
        <Hero />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <PopularProducts />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <SuperQuality />
      </section>
      <section className="sm:px-16 px-8 py-10">
        <Services />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue sm:px-16 px-8 sm:py-24 py-12">
        <CustomerReviews />
      </section>
      <section className="sm:px-16 px-8 sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black sm:px-16 px-8 padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default NikePage;
