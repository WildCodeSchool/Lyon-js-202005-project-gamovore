import React, { useContext, useState, useEffect, useRef } from "react";
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
import { useCallback } from "react";

const Chat = () => {
  const myRef = useRef("");

  const scrollToRef = (myRef) => {
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const executeScroll = useCallback(() => {
    scrollToRef(myRef);
  }, []);

  const { user } = useContext(UserContext);
  const firebase = useContext(FirebaseContext);
  const [gamovoreState, setGamovoreState] = useState(null);
  const [messageWrite, setMessageWrite] = useState("");
  const [userChat, setUserChat] = useState(null);

  const handleChangeMessage = (e) => {
    e.preventDefault();
    setMessageWrite(e.target.value);
  };

  const sendMessage = ({ user }, { gamovoreState }, messageWrite) => {
    if (messageWrite === "") {
      return null;
    }
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

    executeScroll();

    // remets les messages à 0
    setMessageWrite("");
  };

  useEffect(() => {
    if (user && firebase && gamovoreState) {
      const userId = user.id;
      const gamovoreId = gamovoreState.id;

      firebase.db
        .collection("users")
        .doc(userId)
        .collection(gamovoreId)
        .onSnapshot((querySnapshot) => {
          const gamovoreId = [];
          querySnapshot.forEach((doc) => {
            gamovoreId.push(doc.data());
          });
          setUserChat(gamovoreId);
          executeScroll();
        });

      console.log("toto");
    }
  }, [user, gamovoreState, executeScroll, firebase]);

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
              <Messages ref={myRef}>
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
                <div>
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
                </div>
              </Messages>
            </Scrollable>
          </ConversationContent>
        ) : (
          <div>
            <h1>Select a conversation</h1>
          </div>
        )}
      </ConversationLayout>
    </ChatLayout>
  );
};

export default Chat;
