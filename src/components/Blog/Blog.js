import React from "react";
import { Accordion, Table } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h2 className="center-title mt-4 mb-4">Blog</h2>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Question: Difference between javascript and nodejs
          </Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Node.JS</th>
                  <th>Javascript</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    It is a programming language. We use JS mainly to write
                    scripts on a website that makes web pages more dynamic in
                    nature.
                  </td>
                  <td>
                    It is a runtime environment for Javascript that lets a user
                    run this programming language on the server-side as well.
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>We can only run JS on browsers.</td>
                  <td>NodeJS helps us run JS outside the browser as well.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>It is utilised on the web page's client-side.</td>
                  <td>
                    It lets us use JS on the server-side as well since it works
                    on the server-side.
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    We can run JS in any browser engine, such as the
                    Spidermonkey in the Firefox browser and the JS core in the
                    Safari browser.
                  </td>
                  <td>
                    Inside Node.JS, we have the JS engine known as V8. It helps
                    in parsing and running the JS code.
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    The JS can easily add HTML and even play with the DOM.
                  </td>
                  <td>
                    The Node.JS, on the other hand, isn't capable enough to add
                    various HTML tags.
                  </td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Question: Differences between sql and nosql databases.
          </Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>SQL</th>
                  <th>NoSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    SQL is also pronounced as “S-Q-L” or as “See-Quel” and is
                    primarily known to be a Relational Database
                  </td>
                  <td>NoSQL is a distributed or Non-relational Database</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Database, here is in table format</td>
                  <td>
                    NoSQL databases are document based with key-value pairs and
                    graph databases.
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>They are scalable vertically</td>
                  <td>These are horizontally scalable</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Schema used is pre-defined</td>
                  <td>
                    Dynamic schema is used for unstructured or disorganised data
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    Examples are Sqlite, MySql, Oracle, Postgres and MS-SQL
                  </td>
                  <td>
                    Examples are Cassandra, MongoDB, BigTable, Redis, RavenDb,
                    Hbase, Neo4j and CouchDb
                  </td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Question: What is the purpose of jwt and how does it work?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
            </p>
            <p>
              JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. What these claims are depends on the use case at hand.
              For example, a claim may assert who issued the token, how long it
              is valid for, or what permissions the client has been granted.
              <br />
              A JWT is a string made up of three parts, separated by dots (.),
              and serialized using base64. In the most common serialization
              format, compact serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz.
              <br />
              <br />
              Once decoded, you will get two JSON strings:
              <br />
              <br />
              1. The header and the payload. <br />
              2. The signature.
              <br /> The JOSE (JSON Object Signing and Encryption) header
              contains the type of token — JWT in this case — and the signing
              algorithm.
              <br />
              <br />
              The payload contains the claims. This is displayed as a JSON
              string, usually containing no more than a dozen fields to keep the
              JWT compact. This information is typically used by the server to
              verify that the user has permission to perform the action they are
              requesting.
              <br />
              <br />
              There are no mandatory claims for a JWT, but overlaying standards
              may make claims mandatory. For example, when using JWT as bearer
              access token under OAuth2.0, iss, sub, aud, and exp must be
              present. some are more common than others.
              <br />
              <br />
              The signature ensures that the token hasn't been altered. The
              party that creates the JWT signs the header and payload with a
              secret that is known to both the issuer and receiver, or with a
              private key known only to the sender. When the token is used, the
              receiving party verifies that the header and payload match the
              signature.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
