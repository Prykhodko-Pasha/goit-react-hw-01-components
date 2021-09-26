import Profile from './soc_profile/Profile';
import user from './soc_profile/user.json';

import Statistics from './statistics/Statistics';
import statisticalData from './statistics/statistical-data.json';

import FriendList from './friendList/FriendList';
import friends from './friendList/friends.json';

import TransactionHistory from './transaction-history/TransactionHistory';
import transactions from './transaction-history/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
