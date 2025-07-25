"use client";
import Head from "next/head";
import React from "react";

const HeadTitle = ({ title }: any) => {
    return (
        <React.Fragment>
            <Head>
                <title>{title} | iCare Service - Mobile Repair Service Center in Chennai</title>
            </Head>
        </React.Fragment>
    )
}
export default HeadTitle