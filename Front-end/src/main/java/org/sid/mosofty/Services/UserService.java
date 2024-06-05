package org.sid.mosofty.Services;


import org.sid.mosofty.Entities.User;
import org.sid.mosofty.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;



    public User save(User user){
        return  userRepository.save(user);
    }
    public Optional<User> findByUsername(String username){
        return userRepository.findByUsername(username);
    }
    public User updateUser(User user){
        return  userRepository.save(user);
    }
    public User authenticate(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user.get();
        }
        return null;
    }




}
