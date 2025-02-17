"use client";

import React, { createRef } from "react";
import Image from "next/image";
import { app } from "@/config/app";
import { cn } from "@/lib/utils/utils";
import Navigation from "@/components/molecules/navigation";
import Slider from "react-slick";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import "./styles.css";
import HomeSectionHeader from "../../../molecules/section-header";
import { hero_dummies } from "@/dev/dummies/home";

interface Props {}

export default function HomeHero(props: Props) {
  const {} = props;

  const slider = createRef<Slider>();

  const next = () => {
    slider.current?.slickNext();
  };

  const prev = () => {
    slider.current?.slickPrev();
  };

  const settings = {
    speed: 700,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <section className="bg-black">
      <header>
        <div
          className={cn(
            "flex h-[8rem] flex-row justify-between items-end px-10 absolute z-10 bg-white inset-x-0 top-0 text-white",
          )}
        >
          <div className="z-10">
            <Image
              src={app.images.logo}
              alt={app.title}
              width={120}
              height={120}
            />
          </div>
          <div className="mb-4 flex">
            {app.navigations.map((navigation) => (
              <Navigation
                key={navigation.label}
                link={navigation}
                // color="white"
              />
            ))}
          </div>
        </div>
      </header>
      <button
        onClick={prev}
        className="rounded-full absolute left-10 z-10 top-[50%] border border-white p-2 text-white hover:border-white/80 hover:text-white/80 transition-all"
      >
        <IconChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="rounded-full absolute right-10 z-10 top-[50%] border border-white p-2 text-white hover:border-white/80 hover:text-white/80 transition-all"
      >
        <IconChevronRight size={32} />
      </button>

      <Slider ref={slider} {...settings}>
        {hero_dummies.map((dummy) => (
          <figure key={dummy.title} className="relative">
            <div className="w-full h-screen">
              <Image
                src={dummy.image}
                alt={dummy.title}
                width={2000}
                height={2000}
                className="object-cover w-full h-full slide-image"
              />
            </div>

            <div className="absolute bg-gradient-to-b from-black/60 to-transparent h-[30%] top-0 inset-x-0" />

            <div className="absolute bg-gradient-to-t from-black/90 to-transparent h-[90%] bottom-0 inset-x-0" />

            <figcaption className="absolute bottom-0 inset-x-0 md:mx-40 slide-section-header">
              <HomeSectionHeader
                title={dummy.title}
                description={dummy.description}
                linkLabel={dummy.linkLabel}
                linkHref={dummy.linkHref}
                color="white"
              />
            </figcaption>
          </figure>
        ))}
      </Slider>
    </section>
  );
}
