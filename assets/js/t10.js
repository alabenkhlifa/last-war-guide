document.addEventListener('DOMContentLoaded', function () {

    // Format number with dots every 3 digits
    function addADotEveryThreeDigits(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function formatLargeNumbers(number) {
        if (number >= 1_000_000_000) {
            return (number / 1_000_000_000).toFixed(1) + 'G'; // Billions
        } else if (number >= 1_000_000) {
            return (number / 1_000_000).toFixed(1) + 'M'; // Millions
        } else if (number >= 1_000) {
            return (number / 1_000).toFixed(1) + 'K'; // Thousands
        } else {
            return number; // If less than a million, return the original number
        }
    }

    function validateDependentTech() {
        const damageReductionLevel = parseInt($('#damage-reduction-sf-tech').val());

        const healthLevel = parseInt($("#health-sf-tech").val());
        const attackLevel = parseInt($("#attack-sf-tech").val());
        const defenseLevel = parseInt($("#defense-sf-tech").val());

        // Ensure health, attack, and defense are not higher than damage-reduction
        if (healthLevel > damageReductionLevel) {
            $("#health-sf-tech").val(damageReductionLevel);
        }
        if (attackLevel > damageReductionLevel) {
            $("#attack-sf-tech").val(damageReductionLevel);
        }
        if (defenseLevel > damageReductionLevel) {
            $("#defense-sf-tech").val(damageReductionLevel);
        }
    }

    function calculateNeededRss() {

        validateDependentTech();

        // Separate resources needed for Damage Reduction research
        const goldDRNeeded = new Map([
            [1, 64_600_000], [2, 92_300_000], [3, 92_300_000], [4, 158_000_000], [5, 158_000_000],
            [6, 221_000_000], [7, 221_000_000], [8, 287_000_000], [9, 287_000_000], [10, 403_000_000]
        ]);

        const ironFoodDRNeeded = new Map([
            [1, 21_700_000], [2, 31_000_000], [3, 31_000_000], [4, 53_000_000], [5, 53_000_000],
            [6, 74_000_000], [7, 74_000_000], [8, 96_000_000], [9, 96_000_000], [10, 134_000_000]
        ]);

        const valorBadgesDRNeeded = new Map([
            [1, 1280], [2, 1440], [3, 1440], [4, 1600], [5, 1600],
            [6, 1800], [7, 1800], [8, 2000], [9, 2000], [10, 2000]
        ]);

        // General resources needed for Health, Attack, and Defense researches
        const goldNeeded = new Map([
            [1, 92_300_000], [2, 158_000_000], [3, 158_000_000], [4, 221_000_000], [5, 221_000_000],
            [6, 287_000_000], [7, 287_000_000], [8, 403_000_000], [9, 403_000_000], [10, 563_000_000]
        ]);

        const ironFoodNeeded = new Map([
            [1, 31_000_000], [2, 53_000_000], [3, 53_000_000], [4, 74_000_000], [5, 74_000_000],
            [6, 96_000_000], [7, 96_000_000], [8, 143_000_000], [9, 143_000_000], [10, 175_000_000]
        ]);

        const valorBadgesNeeded = new Map([
            [1, 1440], [2, 1600], [3, 1600], [4, 1800], [5, 1800],
            [6, 2000], [7, 2000], [8, 2200], [9, 2200], [10, 2400]
        ]);

        // Get the current levels
        const damageReductionLevel = parseInt($('#damage-reduction-sf-tech').val());
        const healthLevel = parseInt($('#health-sf-tech').val());
        const attackLevel = parseInt($('#attack-sf-tech').val());
        const defenseLevel = parseInt($('#defense-sf-tech').val());

        let totalGold = 0;
        let totalIron = 0;
        let totalFood = 0;
        let totalValorBadges = 0;

        // Function to calculate the sum of resources for each level
        function calculateForResearch(level, goldMap, ironFoodMap, valorBadgesMap) {
            let goldSum = 0, ironSum = 0, foodSum = 0, valorBadgesSum = 0;
            for (let i = level + 1; i <= 10; i++) {
                goldSum += goldMap.get(i);
                ironSum += ironFoodMap.get(i);
                foodSum += ironFoodMap.get(i);
                valorBadgesSum += valorBadgesMap.get(i);
            }
            return [goldSum, ironSum, foodSum, valorBadgesSum];
        }

        // Calculate resources needed for Damage Reduction using its specific map
        const [goldDR, ironDR, foodDR, valorDR] = calculateForResearch(damageReductionLevel, goldDRNeeded, ironFoodDRNeeded, valorBadgesDRNeeded);

        // Calculate resources needed for other researches using general resource maps
        const [goldHealth, ironHealth, foodHealth, valorHealth] = calculateForResearch(healthLevel, goldNeeded, ironFoodNeeded, valorBadgesNeeded);
        const [goldAttack, ironAttack, foodAttack, valorAttack] = calculateForResearch(attackLevel, goldNeeded, ironFoodNeeded, valorBadgesNeeded);
        const [goldDefense, ironDefense, foodDefense, valorDefense] = calculateForResearch(defenseLevel, goldNeeded, ironFoodNeeded, valorBadgesNeeded);

        // Summing up all the resources
        totalGold = goldDR + goldHealth + goldAttack + goldDefense;
        totalIron = ironDR + ironHealth + ironAttack + ironDefense;
        totalFood = foodDR + foodHealth + foodAttack + foodDefense;
        totalValorBadges = valorDR + valorHealth + valorAttack + valorDefense;

        // Format the numbers with dots and a more readable format (M, G)
        const goldText = addADotEveryThreeDigits(totalGold) + " (" + formatLargeNumbers(totalGold) + ")";
        const ironText = addADotEveryThreeDigits(totalIron) + " (" + formatLargeNumbers(totalIron) + ")";
        const foodText = addADotEveryThreeDigits(totalFood) + " (" + formatLargeNumbers(totalFood) + ")";
        const valorBadgesText = addADotEveryThreeDigits(totalValorBadges) + " (" + formatLargeNumbers(totalValorBadges) + ")";

        // Display the results
        $('#sf-gold-needed').text("Gold Needed: " + goldText);
        $('#sf-iron-needed').text("Iron Needed: " + ironText);
        $('#sf-food-needed').text("Food Needed: " + foodText);
        $('#sf-valor-badges-needed').text("Valor Badges Needed: " + valorBadgesText);
    }

    // Add event listeners for changes
    $('#damage-reduction-sf-tech, #health-sf-tech, #attack-sf-tech, #defense-sf-tech').change(calculateNeededRss);

});
