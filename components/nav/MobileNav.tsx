import { Link } from "@chakra-ui/next-js";
import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
	isNavOpen: boolean;
	setIsNavOpen: Dispatch<SetStateAction<boolean>>;
};

const variants = {
	visible: {
		opacity: 1,
		y: 0,
	},
	hidden: { opacity: 0, y: -200 },
};

const MobileNav: FC<Props> = ({ isNavOpen, setIsNavOpen }) => {
	const removeNav = () => setIsNavOpen(false);
	return (
		<>
			{isNavOpen && (
				<chakra.div
					w="full"
					pos={"absolute"}
					display={{ base: "block", lg: "none" }}
					bgColor={"#fff"}
					borderWidth={1}
				>
					<chakra.div
						p={4}
						as={motion.div}
						initial="hidden"
						animate="visible"
						variants={variants}
						display={"flex"}
						flexDir={"column"}
						gap={2}
					>
						<Link
							href={"/"}
							_hover={{ textDecor: "none", fontWeight: "bold" }}
						>
							Home
						</Link>
						<Link
							href={"/#experience"}
							_hover={{ textDecor: "none", fontWeight: "bold" }}
						>
							Experience
						</Link>
						<Link
							href={"/#projects"}
							_hover={{ textDecor: "none", fontWeight: "bold" }}
						>
							Projects
						</Link>
					</chakra.div>
				</chakra.div>
			)}
		</>
	);
};

export default MobileNav;
