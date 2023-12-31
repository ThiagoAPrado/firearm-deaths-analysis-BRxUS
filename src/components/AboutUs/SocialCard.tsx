
/* eslint-disable @typescript-eslint/no-unused-vars */

import { SocialCardInterface } from "../../interfaces/interface"
import { SocialsLinkWidget } from "./SocialLinks"

export const SocialCard = ({ socialCard }: { socialCard: SocialCardInterface }) => {

	return (
		<div className="my-[5vh] flex flex-col justify-start justify-items-center gap-[1em] items-center text-start md:flex-row">
			<img className="w-48 h-48 rounded-3xl" src={socialCard.imgUrl} alt={socialCard.name + "_avatar"} />
			<div>
				<h1 className="text-2xl font-bold text-start">{socialCard.name}</h1>
				<p>{socialCard.description}</p>
				<div>
					{socialCard.socials.map((e) => <SocialsLinkWidget socials={e} key={e.nameAt + "_socialsCard"} />)}
				</div>
			</div>
		</div>
	)

}

