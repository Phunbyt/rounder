import { activity, clock, verify, walletMoney } from "../../assets/images";

export const whyDataTop = [
  {
    top: false,
    bottom: true,
    right: true,
    left: false,
    icon: activity,
    headerText: "Predictable Delivery Time",
    bodyText:
      "Know exactly when your produce will arrive—no delays, no surprises.",
  },
  {
    top: false,
    bottom: true,
    right: false,
    left: true,
    icon: clock,
    headerText: "Safe and Reliable Tracking",
    bodyText:
      "Track your goods in real time with guaranteed safety at every mile.",
  },
];
export const whyDataBottom = [
  {
    top: true,
    bottom: false,
    right: true,
    left: false,
    icon: walletMoney,
    headerText: "Lower Costs",
    bodyText:
      "Enjoy budget-friendly transport without compromising quality or speed.",
  },
  {
    top: true,
    bottom: false,
    right: false,
    left: true,
    icon: verify,
    headerText: "Service Reliability",
    bodyText: "Count on consistent, dependable service for every delivery.",
  },
];
