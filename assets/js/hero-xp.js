document.addEventListener('DOMContentLoaded', function() {
    const heroMap = new Map();

    heroMap.set(1, 0);
    heroMap.set(2, 100);
    heroMap.set(3, 200);
    heroMap.set(4, 300);
    heroMap.set(5, 400);
    heroMap.set(6, 500);
    heroMap.set(7, 500);
    heroMap.set(8, 700);
    heroMap.set(9, 800);
    heroMap.set(10, 900);
    heroMap.set(11, 1_000);
    heroMap.set(12, 1_100);
    heroMap.set(13, 1_200);
    heroMap.set(14, 1_300);
    heroMap.set(15, 1_400);
    heroMap.set(16, 1_500);
    heroMap.set(17, 1_600);
    heroMap.set(18, 1_700);
    heroMap.set(19, 1_800);
    heroMap.set(20, 1_900);
    heroMap.set(21, 2_000);
    heroMap.set(22, 2_100);
    heroMap.set(23, 2_300);
    heroMap.set(24, 2_700);
    heroMap.set(25, 3_200);
    heroMap.set(26, 3_900);
    heroMap.set(27, 4_600);
    heroMap.set(28, 5_500);
    heroMap.set(29, 6_600);
    heroMap.set(30, 8_000);
    heroMap.set(31, 9_500);
    heroMap.set(32, 12_000);
    heroMap.set(33, 14_000);
    heroMap.set(34, 17_000);
    heroMap.set(35, 20_000);
    heroMap.set(36, 24_000);
    heroMap.set(37, 29_000);
    heroMap.set(38, 35_000);
    heroMap.set(39, 41_000);
    heroMap.set(40, 49_000);
    heroMap.set(41, 59_000);
    heroMap.set(42, 71_000);
    heroMap.set(43, 85_000);
    heroMap.set(44, 110_000);
    heroMap.set(45, 130_000);
    heroMap.set(46, 150_000);
    heroMap.set(47, 180_000);
    heroMap.set(48, 220_000);
    heroMap.set(49, 260_000);
    heroMap.set(50, 310_000);
    heroMap.set(51, 370_000);
    heroMap.set(52, 440_000);
    heroMap.set(53, 530_000);
    heroMap.set(54, 630_000);
    heroMap.set(55, 760_000);
    heroMap.set(56, 910_000);
    heroMap.set(57, 1_100_000);
    heroMap.set(58, 1_400_000);
    heroMap.set(59, 1_600_000);
    heroMap.set(60, 1_900_000);
    heroMap.set(61, 2_100_000);
    heroMap.set(62, 2_300_000);
    heroMap.set(63, 2_500_000);
    heroMap.set(64, 2_800_000);
    heroMap.set(65, 3_100_000);
    heroMap.set(66, 3_400_000);
    heroMap.set(67, 3_700_000);
    heroMap.set(68, 4_100_000);
    heroMap.set(69, 4_500_000);
    heroMap.set(70, 4_900_000);
    heroMap.set(71, 5_400_000);
    heroMap.set(72, 5_900_000);
    heroMap.set(73, 6_500_000);
    heroMap.set(74, 7_200_000);
    heroMap.set(75, 7_900_000);
    heroMap.set(76, 8_700_000);
    heroMap.set(77, 9_500_000);
    heroMap.set(78, 11_000_000);
    heroMap.set(79, 12_000_000);
    heroMap.set(80, 13_000_000);
    heroMap.set(81, 13_000_000);
    heroMap.set(82, 14_000_000);
    heroMap.set(83, 14_000_000);
    heroMap.set(84, 15_000_000);
    heroMap.set(85, 16_000_000);
    heroMap.set(86, 17_000_000);
    heroMap.set(87, 18_000_000);
    heroMap.set(88, 19_000_000);
    heroMap.set(89, 20_000_000);
    heroMap.set(90, 21_000_000);
    heroMap.set(91, 22_000_000);
    heroMap.set(92, 23_000_000);
    heroMap.set(93, 24_000_000);
    heroMap.set(94, 25_000_000);
    heroMap.set(95, 26_000_000);
    heroMap.set(96, 27_000_000);
    heroMap.set(97, 28_000_000);
    heroMap.set(98, 30_000_000);
    heroMap.set(99, 31_000_000);
    heroMap.set(100, 33_000_000);
    heroMap.set(101, 35_000_000);
    heroMap.set(102, 37_000_000);
    heroMap.set(103, 39_000_000);
    heroMap.set(104, 41_000_000);
    heroMap.set(105, 43_000_000);
    heroMap.set(106, 45_000_000);
    heroMap.set(107, 47_000_000);
    heroMap.set(108, 49_000_000);
    heroMap.set(109, 51_000_000);
    heroMap.set(110, 53_000_000);
    heroMap.set(111, 55_000_000);
    heroMap.set(112, 57_000_000);
    heroMap.set(113, 59_000_000);
    heroMap.set(114, 61_000_000);
    heroMap.set(115, 63_000_000);
    heroMap.set(116, 65_000_000);
    heroMap.set(117, 67_000_000);
    heroMap.set(118, 69_000_000);
    heroMap.set(119, 71_000_000);
    heroMap.set(120, 73_000_000);
    heroMap.set(121, 75_000_000);
    heroMap.set(122, 77_000_000);
    heroMap.set(123, 79_000_000);
    heroMap.set(124, 81_000_000);
    heroMap.set(125, 83_000_000);
    heroMap.set(126, 85_000_000);
    heroMap.set(127, 87_000_000);
    heroMap.set(128, 89_000_000);
    heroMap.set(129, 91_000_000);
    heroMap.set(130, 93_000_000);
    heroMap.set(131, 95_000_000);
    heroMap.set(132, 97_000_000);
    heroMap.set(133, 100_000_000);
    heroMap.set(134, 105_000_000);
    heroMap.set(135, 108_000_000);
    heroMap.set(136, 115_000_000);
    heroMap.set(137, 120_000_000);
    heroMap.set(138, 125_000_000);
    heroMap.set(139, 130_000_000);
    heroMap.set(140, 135_000_000);
    heroMap.set(141, 140_000_000);
    heroMap.set(142, 145_000_000);
    heroMap.set(143, 150_000_000);
    heroMap.set(144, 155_000_000);
    heroMap.set(145, 160_000_000);
    heroMap.set(146, 165_000_000);
    heroMap.set(147, 170_000_000);
    heroMap.set(148, 175_000_000);
    heroMap.set(149, 180_000_000);
    heroMap.set(150, 185_000_000);

    function formatNumber(num) {
        if (num >= 1_000_000_000) {
            return (num / 1_000_000_000).toFixed(1) + 'G';
        } else if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(1) + 'M';
        } else if (num >= 1_000) {
            return (num / 1_000).toFixed(1) + 'k';
        } else {
            return num.toString();
        }
    }

    function formatNumberWithDots(number) {
        // Convert the number to a string and use regex to add dots every three digits
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function calculateDifference() {
        const fromLevel = parseInt($('#hero-xp-from-select').val());
        const toLevel = parseInt($('#hero-xp-to-select').val());

        if (!isNaN(fromLevel) && !isNaN(toLevel)) {
            let sum = 0;

            // Sum the values of keys greater than `fromLevel` and less than or equal to `toLevel`
            for (let [key, value] of heroMap) {
                if (key > fromLevel && key <= toLevel) {
                    sum += value;
                }
            }

            $('#xp-needed-result').text("Required Experience: " + formatNumber(sum) + " (" + formatNumberWithDots(sum) + ")")
            $('#xp-vs-points-result-1p').text("VS Points (1 points per 660 exp): " +
                formatNumber(Math.ceil(sum / 660)) +
                " ("
                + formatNumberWithDots(Math.ceil(sum / 660))
                + ")"
            )
            $('#xp-vs-points-result-2p').text("VS Points (2 points per 660 exp): " +
                formatNumber(Math.ceil(sum / 330)) +
                " ("
                + formatNumberWithDots(Math.ceil(sum / 330))
                + ")"
            )
        } else {
            $('#xp-needed-result').text("XP Needed will be displayed here")
        }
    }

    $('#hero-xp-from-select, #hero-xp-to-select').change(calculateDifference);

});