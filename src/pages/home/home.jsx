import { useCallback, useEffect, useState } from "react";
import "./home.css";
import book_1 from "../../assets/png/book_1.png";
import book_2 from "../../assets/png/book_2.png";
import book_3 from "../../assets/png/book_3.png";
import book_4 from "../../assets/png/book_4.png";
import book_5 from "../../assets/png/book_5.png";
import book_6 from "../../assets/png/book_6.png";
import book_7 from "../../assets/png/book_7.png";
import book_8 from "../../assets/png/book_8.png";
import book_9 from "../../assets/png/book_9.png";
import book_10 from "../../assets/png/book_10.png";
import book_11 from "../../assets/png/book_11.png";
import book_12 from "../../assets/png/book_12.png";
import book_13 from "../../assets/png/book_13.png";
import book_14 from "../../assets/png/book_14.png";
import book_15 from "../../assets/png/book_15.png";
import book_16 from "../../assets/png/book_16.png";
import book_17 from "../../assets/png/book_17.png";
import book_18 from "../../assets/png/book_18.png";
import book_19 from "../../assets/png/book_19.png";
import book_shelf from "../../assets/png/shelf.png";
import close from "../../assets/svg/close.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import useDownloader from "react-use-downloader";
import PdfViewer from "../../components/pdf-viewer";
import { BookItem } from "../../components/book/book";
import download_icon from "../../assets/svg/download.svg";
import eye_icon from "../../assets/svg/eye.svg";
import comment_icon from "../../assets/svg/comment.svg";
import like_icon from "../../assets/svg/like.svg";
function Home() {
  const images = [
    {
      title: "Why this book shelf ?",
      description: `During the Summer of 2024, Holy Spirit asked
me to read the book of Romans specifically,
which opened up so many things for me
including the fall of man, the redemptive work
of Jesus and how we are justified, how we can
be renewed and transformed, how we can live a
life of Christ above sin and the world and how
we can fulfil the purposes of God in our life.`,
      image: book_13,
      pdf: "./pdf/book_pdf_13.pdf",
    },
    {
      title: "but god",
      description: `"But God" - The two most powerful words in the Bible that can change any story not matter how bad it seems, like the story of Joseph who raised from the prison to the palace in just a day.`,
      image: book_19,
      pdf: "./pdf/book_pdf_19.pdf",
    },
    {
      title: "The purpose roadmap",
      description: `Moses spent 40 years in the wilderness because he was not sure of the full roadmap of the purpose and call on his life. The clarity of purpose and the call gives you the freedom to pursue it and gives life the joy and meaning that it deserves.`,
      image: book_17,
      pdf: "./pdf/book_pdf_17.pdf",
    },
    {
      title: "The making of a Honourable Vessel",
      description: `The journey of a vessel from being broken, defiled, empty, useless and dishonourable to being restored, pure, filled, useful and honourable.`,
      image: book_18,
      pdf: "./pdf/book_pdf_18.pdf",
    },

    {
      title: "the power of purpose",
      description: `The Apostles were arrested exactly because of their
teachings and the angel released them and told
them to go to the temple which was the most
prominent place in the city and continue teaching.
This sounds contrary to the reason why they were
released in the first place.`,
      image: book_14,
      pdf: "./pdf/book_pdf_14.pdf",
    },
    {
      title: "becoming spirit conscious",
      description: `The High Priests and the High council arrested the
apostles (Disciples of Jesus) because of their
teachings, healings and miracles and put them in
prison. In the night an Angel of the Lord opened the
prison and brought them out of the prison and
asked them to go to the temple and stand and
speak the words of life to the people.`,
      image: book_15,
      pdf: "./pdf/book_pdf_15.pdf",
    },
    {
      title: "carriers of glory",
      description: `This is a very famous bible verse and I always was
intrigued by the intensity of the situation described.
People brought out the sick friends and family
members and they laid them along the road in
which Peter walked so that the shadow of Peter
would fall on them. And when the shadow of Peter
fell on them they were healed`,
      image: book_16,
      pdf: "./pdf/book_pdf_16.pdf",
    },
    {
      title: "The Last Week of Jesus",
      description:
        "Almost 50% of the Gospel of John, 33% of the Gospel of Mathew, 40% of the Gospel of Mark and 25% of the Gospel of Luke are dedicated for this one last week in the life of Jesus. Why is that? It means that there is a lot for us to read, meditate and learn from this one week of the life of Jesus",
      image: book_6,
      pdf: "./pdf/book_pdf_6.pdf",
    },
    {
      title: "the glory of the cross",
      description:
        "How did a symbol that signified curse and death became the symbol of the largest religion in the world. How a symbol of shame became the Glory of Jesus and hence became our Glory also. What the cross has revealed or done for us and what is the Glory of the Cross.",
      image: book_5,
      pdf: "./pdf/book_pdf_5.pdf",
    },
    {
      title: "the call",
      description:
        "Many people think that a Call is what a person is called to do orthe purpose of life.The‘do’part of it becomes very important and people start thinking of it dynamically and outwardly.People think of it as an adventure or as a drive to do great things.",
      image: book_1,
      pdf: "./pdf/book_pdf_1.pdf",
    },

    {
      title: "the solomon's porch",
      description:
        "Solomon’s porch/portico/colonnade was a large covered area supported by marble columns which supported a wooden roof structure and was located on the east side of the temple mount area along the eastern wall that overlooked the Kidron Valley and faced the Mount of Olives just above the Garden of Gethsemane. ",
      image: book_2,
      pdf: "./pdf/book_pdf_2.pdf",
    },

    {
      title: "the five rivers of live",
      description:
        "We see in the Bible that there was a main river that originated in Eden (which was the source) and then divided into 4 branches. ",
      image: book_3,
      pdf: "./pdf/book_pdf_3.pdf",
    },

    {
      title: "the blessing harmony",
      description:
        "It all starts with coming together which is the first step. This is the beginning. This happens during a marriage or when you start attending a church or a group of friends coming together. ",
      image: book_4,
      pdf: "./pdf/book_pdf_4.pdf",
    },

    {
      title: "living above sin",
      description: `In Romans:5:14 it is mentioned that “Death
reigned over those who did not sin in the
likeness of the Transgression of Adam”.
The peculiar phrase here is “who did not sin in
the likeness of the Transgression of Adam”.`,
      image: book_7,
      pdf: "./pdf/book_pdf_7.pdf",
    },

    {
      title: "the heart posture",
      description: `I had a great chance to meet a christian
billionaire. He was a wonderful man and I took
him to many places in Chennai for his ministry.
He was a wonderful man of God, great family
man and a hugely successful businessman`,
      image: book_8,
      pdf: "./pdf/book_pdf_8.pdf",
    },

    {
      title: "the right mindset",
      description: `There was a lile city, and few men within it; and
there came a great king against it, and
besieged it, and built great bulwarks against it:
Now there was found in it a poor wise man, and
he by his wisdom delivered the city; yet no man
remembered that same poor man.`,
      image: book_9,
      pdf: "./pdf/book_pdf_9.pdf",
    },
    {
      title: "the three days",
      description: `In this book we will see what happened after
the death of Jesus till his resurrection on
Sunday. What happened on Friday, Saturday
and Easter Sunday. How did Jesus make all
things new and how did he restore the life that
man had in the Garden of Eden?`,
      image: book_10,
      pdf: "./pdf/book_pdf_10.pdf",
    },
    {
      title: "a higher dimension",
      description: `Imagine a lile girl living in a 2D world, having
a chocolate. She wants to protect it from
other people taking it. So she draws 4 lines
around her and makes it a square and lives
inside it.`,
      image: book_11,
      pdf: "./pdf/book_pdf_11.pdf",
    },
    {
      title: "the call of the discipile",
      description: `The disciples we men Jesus called to follow him.
The Bible says that there were 12 disciples of
Jesus primarily and 70 more disciples. Both of
these groups were with Jesus from the start
and have been a witness to the death and
resurrection of Jesus.`,
      image: book_12,
      pdf: "./pdf/book_pdf_12.pdf",
    },
  ];
  const [modal, setModal] = useState(false);

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);
  const openModal = useCallback((pdf) => {
    return () => setModal(pdf);
  }, []);

  const navigate = useNavigate();
  const { download, isInProgress, percentage } = useDownloader();
  const [params] = useSearchParams();
  const id = params.get("id");
  const view = parseInt(params.get("view"));
  useEffect(() => {
    if (id !== null && view !== null) {
      setModal(images[id]);
    }
  }, [id, view]);

  return (
    <div className="app">
      {modal && (
        <div className="modal">
          <div className="modal_content">
            <button disabled={isInProgress} onClick={closeModal}>
              <img src={close} alt="" />
            </button>
            <div className="book_view">
              <BookItem img={modal.image} />
              <div className="book_view_content">
                <h1>{modal.title}</h1>
                <p>{modal.description}</p>
                <div className="book_analytics">
                  <div>
                    <img src={eye_icon} alt="" />
                    <p>Views</p>
                  </div>
                  <div>
                    <img src={like_icon} alt="" />
                    <p>likes</p>
                  </div>
                  <div>
                    <img src={comment_icon} alt="" />
                    <p>Comments</p>
                  </div>
                </div>
                {modal.pdf !== "comming soon" && (
                  <div className="modal_btns">
                    <button
                      onClick={() => {
                        if (!isInProgress) {
                          navigate("/book");
                          localStorage.setItem("book_path", modal.pdf);
                        }
                      }}
                    >
                      Read Now
                    </button>
                    <button
                      onClick={() => {
                        if (!isInProgress)
                          download(modal.pdf, `${modal.title}.pdf`);
                      }}
                    >
                      <img src={download_icon} alt="" />
                      {isInProgress
                        ? `Downloading (${percentage}%)`
                        : "Download Book"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="book_shelf">
        <h1>MY BOOK SHELF</h1>
        <div className="book_shelf_container">
          {images.map((itm, i) => {
            return (
              <BookItem
                key={i + itm.title}
                onClick={openModal(itm)}
                img={itm.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
