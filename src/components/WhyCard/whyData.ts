import { activity, clock, verify, walletMoney } from "../../assets/images";

export const whyDataTop = [
  {
    top: false,
    bottom: true,
    right: true,
    left: false,
    icon: activity,
    headerText: "Predictable Commutes",
    bodyText:
      "RoundeR offers a reliable service that makes planning your journeys effortless.",
  },
  {
    top: false,
    bottom: true,
    right: false,
    left: true,
    icon: clock,
    headerText: "Time-Based Rides",
    bodyText:
      "Our time-based ride model ensures you get to your destination promptly without unnecessary delays.",
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
      "Affordable transportation shouldn’t compromise on quality. With RoundeR, you enjoy premium rides at budget-friendly rates.",
  },
  {
    top: true,
    bottom: false,
    right: false,
    left: true,
    icon: verify,
    headerText: "Service Reliability",
    bodyText:
      "Count on us for consistent, high-quality service every time you ride.",
  },
];
