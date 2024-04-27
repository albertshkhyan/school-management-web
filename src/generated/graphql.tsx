import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddGradeInput = {
  grade: Scalars['Float']['input'];
  studentId: Scalars['ID']['input'];
};

export type Classes = {
  __typename?: 'Classes';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateClassInput = {
  name: Scalars['String']['input'];
};

export type CreateStudentInput = {
  age?: InputMaybe<Scalars['Float']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type CreateSubjectInput = {
  name: Scalars['String']['input'];
};

export type CreateTeacherInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addGrade: Student;
  createClass: Classes;
  createStudent: Student;
  createSubject: Subject;
  createTeacher: Teacher;
  deleteStudent: Student;
  deleteTeacher: Teacher;
  updateClass: Classes;
  updateStudent: Student;
  updateSubject: Subject;
  updateTeacher: Teacher;
};


export type MutationAddGradeArgs = {
  addGradeInput: AddGradeInput;
};


export type MutationCreateClassArgs = {
  createClassInput: CreateClassInput;
};


export type MutationCreateStudentArgs = {
  studentInput: CreateStudentInput;
};


export type MutationCreateSubjectArgs = {
  createSubjectInput: CreateSubjectInput;
};


export type MutationCreateTeacherArgs = {
  teacherInput: CreateTeacherInput;
};


export type MutationDeleteStudentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTeacherArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateClassArgs = {
  id: Scalars['String']['input'];
  updateClassInput: UpdateClassInput;
};


export type MutationUpdateStudentArgs = {
  id: Scalars['String']['input'];
  studentInput: UpdateStudentInput;
};


export type MutationUpdateSubjectArgs = {
  id: Scalars['String']['input'];
  updateSubjectInput: UpdateSubjectInput;
};


export type MutationUpdateTeacherArgs = {
  id: Scalars['String']['input'];
  teacherInput: UpdateTeacherInput;
};

export type Query = {
  __typename?: 'Query';
  getAllClasses: Array<Classes>;
  getAllStudents: Array<Student>;
  getAllSubjects: Array<Subject>;
  getAllTeachers: Array<Teacher>;
  getStudentById: Student;
  getSubjectById: Subject;
  welcomeMessage: Scalars['String']['output'];
};


export type QueryGetStudentByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetSubjectByIdArgs = {
  id: Scalars['String']['input'];
};

export type Student = {
  __typename?: 'Student';
  age?: Maybe<Scalars['Float']['output']>;
  firstName: Scalars['String']['output'];
  grade?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  studentClass?: Maybe<Classes>;
};

export type Subject = {
  __typename?: 'Subject';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Teacher = {
  __typename?: 'Teacher';
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

export type UpdateClassInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStudentInput = {
  age?: InputMaybe<Scalars['Float']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSubjectInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTeacherInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type StudentFragmentFragment = { __typename?: 'Student', id: string, grade?: number | null, studentClass?: { __typename?: 'Classes', id: string, name: string } | null };

export type CreateStudentMutationVariables = Exact<{
  studentInput: CreateStudentInput;
}>;


export type CreateStudentMutation = { __typename?: 'Mutation', createStudent: { __typename?: 'Student', id: string, grade?: number | null, studentClass?: { __typename?: 'Classes', id: string, name: string } | null } };

export type AddGradeMutationVariables = Exact<{
  addGradeInput: AddGradeInput;
}>;


export type AddGradeMutation = { __typename?: 'Mutation', addGrade: { __typename?: 'Student', id: string, grade?: number | null, studentClass?: { __typename?: 'Classes', id: string, name: string } | null } };

export type UpdateStudentMutationVariables = Exact<{
  studentId: Scalars['String']['input'];
  input: UpdateStudentInput;
}>;


export type UpdateStudentMutation = { __typename?: 'Mutation', updateStudent: { __typename?: 'Student', id: string, grade?: number | null, studentClass?: { __typename?: 'Classes', id: string, name: string } | null } };

export type GetWelcomeMessageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWelcomeMessageQuery = { __typename?: 'Query', welcomeMessage: string };

export const StudentFragmentFragmentDoc = gql`
    fragment StudentFragment on Student {
  id
  grade
  studentClass {
    id
    name
  }
}
    `;
export const CreateStudentDocument = gql`
    mutation CreateStudent($studentInput: CreateStudentInput!) {
  createStudent(studentInput: $studentInput) {
    ...StudentFragment
  }
}
    ${StudentFragmentFragmentDoc}`;
export type CreateStudentMutationFn = Apollo.MutationFunction<CreateStudentMutation, CreateStudentMutationVariables>;

/**
 * __useCreateStudentMutation__
 *
 * To run a mutation, you first call `useCreateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStudentMutation, { data, loading, error }] = useCreateStudentMutation({
 *   variables: {
 *      studentInput: // value for 'studentInput'
 *   },
 * });
 */
export function useCreateStudentMutation(baseOptions?: Apollo.MutationHookOptions<CreateStudentMutation, CreateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStudentMutation, CreateStudentMutationVariables>(CreateStudentDocument, options);
      }
export type CreateStudentMutationHookResult = ReturnType<typeof useCreateStudentMutation>;
export type CreateStudentMutationResult = Apollo.MutationResult<CreateStudentMutation>;
export type CreateStudentMutationOptions = Apollo.BaseMutationOptions<CreateStudentMutation, CreateStudentMutationVariables>;
export const AddGradeDocument = gql`
    mutation AddGrade($addGradeInput: AddGradeInput!) {
  addGrade(addGradeInput: $addGradeInput) {
    ...StudentFragment
  }
}
    ${StudentFragmentFragmentDoc}`;
export type AddGradeMutationFn = Apollo.MutationFunction<AddGradeMutation, AddGradeMutationVariables>;

/**
 * __useAddGradeMutation__
 *
 * To run a mutation, you first call `useAddGradeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGradeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGradeMutation, { data, loading, error }] = useAddGradeMutation({
 *   variables: {
 *      addGradeInput: // value for 'addGradeInput'
 *   },
 * });
 */
export function useAddGradeMutation(baseOptions?: Apollo.MutationHookOptions<AddGradeMutation, AddGradeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGradeMutation, AddGradeMutationVariables>(AddGradeDocument, options);
      }
export type AddGradeMutationHookResult = ReturnType<typeof useAddGradeMutation>;
export type AddGradeMutationResult = Apollo.MutationResult<AddGradeMutation>;
export type AddGradeMutationOptions = Apollo.BaseMutationOptions<AddGradeMutation, AddGradeMutationVariables>;
export const UpdateStudentDocument = gql`
    mutation UpdateStudent($studentId: String!, $input: UpdateStudentInput!) {
  updateStudent(id: $studentId, studentInput: $input) {
    ...StudentFragment
  }
}
    ${StudentFragmentFragmentDoc}`;
export type UpdateStudentMutationFn = Apollo.MutationFunction<UpdateStudentMutation, UpdateStudentMutationVariables>;

/**
 * __useUpdateStudentMutation__
 *
 * To run a mutation, you first call `useUpdateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentMutation, { data, loading, error }] = useUpdateStudentMutation({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateStudentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentMutation, UpdateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStudentMutation, UpdateStudentMutationVariables>(UpdateStudentDocument, options);
      }
export type UpdateStudentMutationHookResult = ReturnType<typeof useUpdateStudentMutation>;
export type UpdateStudentMutationResult = Apollo.MutationResult<UpdateStudentMutation>;
export type UpdateStudentMutationOptions = Apollo.BaseMutationOptions<UpdateStudentMutation, UpdateStudentMutationVariables>;
export const GetWelcomeMessageDocument = gql`
    query GetWelcomeMessage {
  welcomeMessage
}
    `;

/**
 * __useGetWelcomeMessageQuery__
 *
 * To run a query within a React component, call `useGetWelcomeMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWelcomeMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWelcomeMessageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWelcomeMessageQuery(baseOptions?: Apollo.QueryHookOptions<GetWelcomeMessageQuery, GetWelcomeMessageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWelcomeMessageQuery, GetWelcomeMessageQueryVariables>(GetWelcomeMessageDocument, options);
      }
export function useGetWelcomeMessageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWelcomeMessageQuery, GetWelcomeMessageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWelcomeMessageQuery, GetWelcomeMessageQueryVariables>(GetWelcomeMessageDocument, options);
        }
export function useGetWelcomeMessageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetWelcomeMessageQuery, GetWelcomeMessageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWelcomeMessageQuery, GetWelcomeMessageQueryVariables>(GetWelcomeMessageDocument, options);
        }
export type GetWelcomeMessageQueryHookResult = ReturnType<typeof useGetWelcomeMessageQuery>;
export type GetWelcomeMessageLazyQueryHookResult = ReturnType<typeof useGetWelcomeMessageLazyQuery>;
export type GetWelcomeMessageSuspenseQueryHookResult = ReturnType<typeof useGetWelcomeMessageSuspenseQuery>;
export type GetWelcomeMessageQueryResult = Apollo.QueryResult<GetWelcomeMessageQuery, GetWelcomeMessageQueryVariables>;