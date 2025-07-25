/**
 * 广告播放插件<a href='https://www.ic-apac-official.com/?camp=58519'><img class='img-fluid' src='https://promo.icmarkets.com/GIFs/2022/Indices-FSA-VIET/970x250_Indices_FSA_VIET.gif' width='970' height='250'/></a>
 */
module.exports = {
  // <div id="webtraf_16607" style="width:468px;height:60px;"><script src="https://webtrafic.ru/ads.php?uid=16607" async></script></div>
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // 谷歌广告ID e.g ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // 谷歌广告ID测试模式，这种模式获取假的测试广告，用于开发 https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '3806269138', // Google AdScene>广告>按单元广告>新建文章内嵌广告 粘贴html代码中的data-ad-slot值
  ADSENSE_GOOGLE_SLOT_FLOW:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '1510444138', // Google AdScene>广告>按单元广告>新建信息流广告
  ADSENSE_GOOGLE_SLOT_NATIVE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '4980048999', // Google AdScene>广告>按单元广告>新建原生广告
  ADSENSE_GOOGLE_SLOT_AUTO:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '8807314373', // Google AdScene>广告>按单元广告>新建展示广告 （自动广告）

  // 万维广告
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // https://wwads.cn/ 创建您的万维广告单元ID
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false // 是否开启WWADS广告屏蔽插件检测,开启后会在广告位上以文字提示 @see https://github.com/bytegravity/whitelist-wwads
}
