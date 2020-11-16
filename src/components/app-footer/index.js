import React, { memo } from "react";
import { FooterWrap, FooterLeft, FooterRight } from "./style";
import { footerLinks, footerImages } from "../../common/local-data";

export default memo(function ICAppFooter() {
	return (
		<FooterWrap>
			<div className='wrap-v2 content'>
				<FooterLeft>
					<div className='link-list'>
						{footerLinks.map((item) => (
							<span key={item.title}>
								<a
									href={item.link}
									className='link-item'
									target='_blank'
									rel='noopener noreferrer'>
									{item.title}
								</a>
								<span className='link-line'>|</span>
							</span>
						))}
					</div>
					<div className='rights'>
						<span className='sep'>网易公司版权所有&copy;1997-2020</span>
						<span>杭州乐读科技有限公司运营：</span>
						<a
							href='https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png'
							target='_blank'
							rel='noopener noreferrer'>
							浙网文[2018]3506-263号
						</a>
					</div>
					<div className='contact'>
						<span className='sep'>违法和不良信息举报电话：0571-89853516</span>
						<span>举报邮箱：</span>
						<a
							href='mailto:ncm5990@163.com'
							target='_blank'
							rel='noopener noreferrer'>
							ncm5990@163.com
						</a>
					</div>
					<div className='police'>
						<span className='sep'>粤B2-20090191-18</span>
						<a
							href='http://www.beian.miit.gov.cn/publish/query/indexFirst.action'
							target='_blank'
							rel='noopener noreferrer'>
							工业和信息化部备案管理系统网站
						</a>
					</div>
				</FooterLeft>
				<FooterRight>
					{footerImages.map((item, index) => (
						<li key={index} className='unit-list'>
							<a
								href={item.link}
								className='item-alink'
								target='_blank'
								rel='noopener noreferrer'>
								{item.title}
							</a>
							<span className='item-text'></span>
						</li>
					))}
				</FooterRight>
			</div>
		</FooterWrap>
	);
});
