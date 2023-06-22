// import React from 'react';

import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle('Blog')
    return (
        <div className="bg-base-200">
            <div className="my-container  bg-white ">
                <div className="px-6 lg:px-24 space-y-5">
                    <h1 className="font-bold text-4xl text-indigo-400 underline">
                        Blog
                    </h1>
                    <div>
                        <h5 className="font-bold text-lg">
                            What is an access token and refresh token? How do
                            they work and where should we store them on the
                            client-side?
                        </h5>
                        <p className="text-base">
                            An access token is a token that is used to access
                            protected resources on a server on behalf of a user.
                            When a user logs in, the authorization server issues
                            an access token to the client application.
                            <br />A refresh token is a special token that is
                            used to obtain additional access tokens. This allows
                            you to have short-lived access tokens without having
                            to collect credentials every time one expires. You
                            request a refresh token alongside the access and/or
                            ID tokens as part of a user’s initial authentication
                            and authorization flow. On the client-side, access
                            and refresh tokens should be stored securely, such
                            as in an encrypted cookie or local storage. It is
                            important to ensure that these tokens are not
                            accessible by malicious actors.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold text-lg">
                            Compare SQL and NoSQL databases.
                        </h5>
                        <p className="text-base">
                            SQL and NoSQL databases have some key differences.
                            SQL databases have a well-designed pre-defined
                            schema, while NoSQL databases have a dynamic schema
                            for document type or unstructured data. SQL
                            databases are vertically scalable, while NoSQL
                            databases are horizontally scalable. SQL databases
                            require more administration and are typically more
                            expensive to maintain than NoSQL databases. SQL
                            databases are used for structured data, while NoSQL
                            is suitable for structured, semi-structured, and
                            unstructured data. SQL is a standard language for
                            storing, manipulating, and retrieving data in
                            relational database systems, while NoSQL is a
                            non-relational database that does not require a
                            fixed schema and is easy to scale.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold text-lg">
                            What is express js? What is Nest JS?
                        </h5>
                        <p className="text-base">
                            Express.js is a fast, unopinionated, minimalist web
                            framework for Node.js. It provides a robust set of
                            features for web and mobile applications and is
                            designed to be flexible and easy to use.
                            <br />
                            NestJS, on the other hand, is a progressive Node.js
                            framework for building efficient, reliable and
                            scalable server-side applications. It is built with
                            TypeScript and combines elements of OOP (Object
                            Oriented Programming), FP (Functional Programming),
                            and FRP (Functional Reactive Programming). NestJS
                            provides an out-of-the-box application architecture
                            which allows developers and teams to create highly
                            testable, scalable, loosely coupled, and easily
                            maintainable applications.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold text-lg">
                            What is MongoDB aggregate and how does it work?
                        </h5>
                        <p className="text-base">
                            MongoDB’s aggregate function performs an aggregation
                            operation using the aggregation pipeline. The
                            pipeline allows users to process data from a
                            collection or other source with a sequence of
                            stage-based manipulations.
                            <br />
                            The aggregation pipeline consists of one or more
                            stages that process documents. Each stage performs
                            an operation on the input documents, such as
                            filtering, grouping, and calculating values. The
                            documents that are output from a stage are passed to
                            the next stage. An aggregation pipeline can return
                            results for groups of documents, such as the total,
                            average, maximum, and minimum values.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
