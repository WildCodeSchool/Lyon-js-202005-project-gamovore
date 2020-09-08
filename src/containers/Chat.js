import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import FirebaseContext from "../firebase-config/FirebaseContext";
import MyGamovoresChat from "../components/MyGamovoresChat";
import ChatLayout from "../style/ChatLayout";
import ConversationLayout from "../style/ConversationLayout";
import Textarea from "../style/Textarea";
import Button from "../style/Button";
import Messages from "../style/Messages";
import SendedMessage from "../style/SendedMessage";
import Scrollable from "../style/Scrollable";
import ReceivedMessage from "../style/ReceivedMessage";
import ConversationContent from "../style/ConversationContent";
import { useEffect } from "react";

const Chat = () => {
  const { user, setUser } = useContext(UserContext);
  const firebase = useContext(FirebaseContext);
  const [gamovoreState, setGamovoreState] = useState(null);
  const [messageWrite, setMessageWrite] = useState(null);
  const [userChat, setUserChat] = useState(null);

  const handleChangeMessage = (e) => {
    e.preventDefault();
    setMessageWrite(e.target.value);
  };

  const sendMessage = ({ user }, { gamovoreState }, messageWrite) => {
    const userId = user.id;
    const gamovoreId = gamovoreState.id;
    const docId = Date.now().toString();

    // Ajoute le message dans ma base de donnée
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .collection(gamovoreId)
      .doc(docId)
      .set({
        message: messageWrite,
        send: true,
        date: firebase.firestore.Timestamp.now(),
        isView: true,
      });

    //Ajoute le message dans la base de données de mon gamovore
    firebase
      .firestore()
      .collection("users")
      .doc(gamovoreId)
      .collection(userId)
      .doc(docId)
      .set({
        message: messageWrite,
        send: false,
        date: firebase.firestore.Timestamp.now(),
        isView: false,
      });


    // Recharge l'utilisateur

    firebase.userActu(userId).onSnapshot(function (doc) {
      setUser(doc.data());
    });

    // remets les messages à 0
    setMessageWrite("");

  };

  useEffect(() => {
    if (user && firebase && gamovoreState) {
      const userId = user.id;
      const gamovoreId = gamovoreState.id;

      firebase.userActu(userId).onSnapshot(function (doc) {
        setUser(doc.data());
      });

      firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .collection(gamovoreId)
        .orderBy("date", "asc")
        .get()
        .then((snapshot) => {
          let messages = [];
          snapshot.forEach((doc) => {
            if (doc && doc.exists) {
              messages.push(doc.data());
            } else console.log("no user");
          });
          setUserChat(messages);
        });
    }
  }, [user, gamovoreState]);

  return (
    <ChatLayout>
      <MyGamovoresChat
        width="20%"
        user={user}
        setGamovoreState={setGamovoreState}
      />
      <ConversationLayout>
        {gamovoreState ? (
          <ConversationContent>
            <h1>{gamovoreState.pseudo}</h1>
            <Scrollable>
              {userChat ? (
                userChat.map((message) => (
                  <Messages key={message.date}>
                    {message.send ? (
                      <SendedMessage key={message.date}>
                        <p>{message.message}</p>
                      </SendedMessage>
                    ) : (
                      <ReceivedMessage key={message.date}>
                        <p>{message.message}</p>
                      </ReceivedMessage>
                    )}
                  </Messages>
                ))
              ) : (
                <div>No message</div>
              )}
            </Scrollable>
            <br />
            <Textarea
              onChange={handleChangeMessage}
              value={messageWrite}
            ></Textarea>
            <Button
              onClick={() =>
                sendMessage(
                  { user },
                  { gamovoreState },
                  messageWrite,
                  setMessageWrite
                )
              }
            >
              Send
            </Button>
          </ConversationContent>
        ) : (
          <h1>Select a gamovore</h1>
        )}
      </ConversationLayout>
    </ChatLayout>
  );
};

export default Chat;
