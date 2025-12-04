import { activity, clock, verify, walletMoney } from "../../assets/images";

export const whyDataTop = [
  {
    top: false,
    bottom: true,
    right: true,
    left: false,
    icon: clock,
    headerText: "Real-Time Visibility",
    bodyText:
      "Gain a unified view of inventory levels across all store locations.",
  },
  {
    top: false,
    bottom: true,
    right: false,
    left: true,
    icon: walletMoney,
    headerText: "Automated Alerts",
    bodyText:
      "Instantly detect low stock, expiring items, and active promotions to act faster.",
  },
];
export const whyDataBottom = [
  {
    top: true,
    bottom: false,
    right: true,
    left: false,
    icon: verify,
    headerText: "Smarter Decisions",
    bodyText:
      "Use actionable insights to minimize waste, prevent stock-outs, and boost profitability.",
  },
  {
    top: true,
    bottom: false,
    right: false,
    left: true,
    icon: activity,
    headerText: "Geo-Targeted Promotions",
    bodyText:
      "Enable location-based offers that drive foot traffic and enhance in-store engagement.Enable location-based offers that drive foot traffic and enhance in-store engagement.",
  },
];
