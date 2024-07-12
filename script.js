// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3BFXHuDxxIv_UABTYkJG0eGx5sJUBi24",
    authDomain: "sparta-9f2e1.firebaseapp.com",
    projectId: "sparta-9f2e1",
    storageBucket: "sparta-9f2e1.appspot.com",
    messagingSenderId: "1081233747332",
    appId: "1:1081233747332:web:f02c8e09347e8f1bb5c1d1",
    measurementId: "G-91FCJRKH22"
};


// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

$("#postingbtn").click(async function () {
    let image = $('#image').val();
    let title = $('#title').val();
    let star = $('#star').val();
    let comment = $('#comment').val();

    let doc = {
        'image': image,
        'title': title,
        'star': star,
        'comment': comment
    };
    await addDoc(collection(db, "foods"), doc);
    alert('저장 완료!');
    window.location.reload();
})

let docs = await getDocs(collection(db, "foods"));
docs.forEach((doc) => {
    let row = doc.data();
    console.log(row);

    let image = row['image'];
    let title = row['title'];
    let star = row['star'];
    let comment = row['comment'];

    let temp_html = `        
        <div class="card" style="width: 18rem;">
          <img src="${image}"
            class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="food">${title}</h5>
            <p class="star">${star}</p>
            <p class="content">${comment}</p>
            <a href="#" class="btn btn-warning">주문하기</a>
          </div>
        </div>`;
    $('#card').append(temp_html)
});

