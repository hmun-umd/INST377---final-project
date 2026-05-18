async function createComment() {
    await fetch('/review', {
        method: 'POST',
        body: JSON.stringify({
            nickname: `${document.getElementById('nickname').value}`,
            food: `${document.getElementById('food').value}`,
            comment: `${document.getElementById('comment').value}`,
        }),
        headers: {
            'content-type': 'application/json'
        }
    }).then((result) => result.json());

    await loadReviewData();
}

async function loadReviewData() {
    await fetch('/reviews')
        .then((result) => result.json())
        .then((resultJson) => {
            console.log(resultJson);
            const table =  document.createElement('table');
            table.setAttribute('id', 'ReviewInfo');
            // Setting up table heading row
            const tableRow = document.createElement('tr');

            const tableHeadingNickname = document.createElement('th');
            tableHeadingNickname.innerHTML = 'Nickname';

            const tableHeadingFood = document.createElement('th');
            tableHeadingFood.innerHTML = 'Place';

            const tableHeadingComment = document.createElement('th');
            tableHeadingComment.innerHTML = 'Comment';

            tableRow.appendChild(tableHeadingNickname);
            tableRow.appendChild(tableHeadingFood);
            tableRow.appendChild(tableHeadingComment);

            table.appendChild(tableRow);

            // Adding Data to table
            resultJson.forEach((review) => { //[] for forEach
                const reviewTableRow = document.createElement('tr');
                const reviewTableNickname = document.createElement('td');
                const reviewTableFood = document.createElement('td');
                const reviewTableComment = document.createElement('td');

                reviewTableNickname.innerHTML = review['review_nickname'];
                reviewTableFood.innerHTML = review['review_food_loc'];
                reviewTableComment.innerHTML = review['review_comment'];

                reviewTableRow.appendChild(reviewTableNickname);
                reviewTableRow.appendChild(reviewTableFood);
                reviewTableRow.appendChild(reviewTableComment);

                table.appendChild(reviewTableRow);
            });

            const preExistingTable = document.getElementById('ReviewInfo');
            if(preExistingTable) {
                preExistingTable.remove();
            }

            document.body.appendChild(table);
        });
}

window.onload = function() {
    loadReviewData();
}