import 'package:flutter/material.dart';

const Color kBackgroundColor = Color(0xfffcf5fd);
const Color kPrimaryColor = Color(0xFF1B2644);

const Color kPrimaryColorLighter10 = Color(0xFF2C3A5E);
const Color kPrimaryColorLighter20 = Color(0xFF3C4F78);
const Color kPrimaryColorLighter30 = Color(0xFF4D6391);

const Color kPrimaryColorDarker10 = Color(0xFF171F3B);
const Color kPrimaryColorDarker20 = Color(0xFF141935);
const Color kPrimaryColorDarker30 = Color(0xFF11142E);

const Color kTransparentColor = Colors.transparent;

const Color kBlackColor = Color(0xff000000);
const Color kBlack54Color = Colors.black54;

final Color kGrey100Color = Colors.grey.shade100;
final Color kGrey200Color = Colors.grey.shade200;
final Color kGray300Color = Colors.grey.shade300;
const Color kGreyLightColor = Color(0xffDDDDDD);
const Color kDarkGreyColor = Color(0xff686D76);
const Color kGreyColor = Colors.grey;

const Color kWhiteColor = Color(0xffffffff);
const Color kWhite70Color = Colors.white70;
const Color kWhite60Color = Colors.white60;

const Color kErrorColor = Color(0xFFCC1006);
final Color kDeepOrangeColor = Colors.deepOrange.shade900;
const Color kOrangeColor = Color(0xFFe84700);
const Color kRedColor = Color(0xFFEF5350);
const Color kLightOrangeColor = Color(0xFFFFA726);
const Color kLightYellowColor = Color(0xFFFAF6BC);

const Color kGreenColor = Color(0xFF66BB6A);
const Color kTealColor = Color(0xFF4DB6AC);

const Color kBlueColor = Color(0xFF1E88E5);
const Color kSkyBlueColor = Color(0xFF42A5F5);
const Color kLightBlueColor = Color(0xFF64B5F6);
const Color kExtremeLightBlueColor = Color(0xFFCADCED);

const Color kPurpleColor = Color(0xffAD49E1);
const Color kSoftPurpleColor = Color(0xFF7986CB);
const Color kBrownColor = Color(0xFF8D6E63);

///
final List<BoxShadow> kAdsShadow = [
  BoxShadow(
      color: Colors.white.withOpacity(0.5),
      spreadRadius: -5,
      offset: const Offset(-5, -5),
      blurRadius: 30),
  BoxShadow(
      color: Colors.blue[900]!.withOpacity(.2),
      spreadRadius: 2,
      offset: const Offset(7, 7),
      blurRadius: 20)
];

List<BoxShadow> kRoundedIconButtonShadow = [
  const BoxShadow(
    color: kGreyLightColor,
    blurRadius: 5.0,
    spreadRadius: 1.0,
    offset: Offset(2, 2),
  ),
];

List<BoxShadow> kLightButtonShadow = [
  BoxShadow(
    color: kDarkGreyColor.withAlpha(100),
    blurRadius: 10.0,
  ),
];
