import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools ',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Docs',
    icon: 'HelpIcon',
    href: 'https://smokingcucumberfinance.gitbook.io/smokingcucumber/',
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/SmokingCucumber',
  },
  {
    	label: "Telegram",
        icon: "TelegramIcon",
		items: [
            {
                label: "English",
                href: "https://t.me/SmokingCucumberFinanceChat",
            },
            {
                label: "Announcement",
                href: "https://t.me/SmokingCucumberFinance",
            },
        ],
    },
]

export default config
