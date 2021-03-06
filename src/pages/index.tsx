import type { NextPage } from "next";
import Head from "next/head";
import { Box, Heading } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { HomeCarousel } from "../components/HomeCarousel";
import { HomeBanner } from "../components/HomeBanner";
import { TripsInfo } from "../components/TripsInfo";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<>
				<Header />

				<HomeBanner />
				<Box mb="2rem">
					<TripsInfo />

					<Box textAlign="center" color="gray.600" my={["1.5rem", "2.25rem", "3rem"]}>
						<Heading fontSize={["20px", "28px", "36px"]} fontWeight="medium">
							Vamos nessa?
						</Heading>
						<Heading fontSize={["20px", "28px", "36px"]} fontWeight="medium">
							Então escolha seu continente
						</Heading>
					</Box>

					<HomeCarousel />
				</Box>
			</>
		</>
	);
};

export default Home;
