import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");
  li.className = "list-row";
  // div生成
  const div = document.createElement("div");
  div.className = "list";
  li.appendChild(div);
  console.log(li);

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    // const deleteTaret = completeButton.parentNode.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTaret);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode.parentNode;
    const addText = addTarget.firstElementChild.firstElementChild.innerText;
    console.log(addTarget);
    //div以下を初期化
    addTarget.firstElementChild.textContent = null;

    //pタグ生成
    const p = document.createElement("p");
    p.innerText = addText;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      console.log("戻すよー");
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      // document.getElementById("complete-list").removeChild(deleteTarget);
      //textの取得
      const text = backButton.parentNode.parentNode.firstElementChild.innerText;
      console.log(text);
      // deleteTarget.firstElementChild.textContent = null;
    });
    //divタグの子要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(li);
    console.log(li);
    //完了リストliタグ以降のappendChildがないor不正
    //リストの構造が未完了リストと同じでないためきれいに削除できない
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
    // const deleteTaret = deleteButton.parentNode.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTaret);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = () => {};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
